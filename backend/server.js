const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const data = require('./data');

// obs: add cors mais tarde
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const users = [];

io.on('connection', (socket) => {
  console.log(`Usuário novo conectado ${socket.id}`);

  io.emit('chat.updateUsers', users);

  socket.on('chat.addUser', (username) => {
    const foundUser = data.find((u) => u.username === username);
    const user = { id: socket.id, name: foundUser.username, avatar: foundUser.avatar };
    users.push(user);
    
    socket.emit('chat.currentUser', user);
    socket.broadcast.emit('chat.updateUsers', users);

    
  });

  socket.on('newUser', (user) => {
    console.log('here!')
    users.push({socketId: socket.id, name: user});

    io.emit('updateUsers', users);

    io.emit('newMessage', `Usuário no socket ${socket.id} se conectou`);
  });
  

  socket.on('message', (message) => {
    io.emit('newMessage', message);

    socket.emit('xyz', 'lflkajsdflkasd');

    socket.broadcast.emit('broadcastMessage', 'qualquer coisa');
  });

  socket.on('disconnect', () => {
    io.emit('newMessage', `Usuário no socket ${socket.id} se desconectou`);
  });
})


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.render('home');
});

httpServer.listen('3001');