import socketIOClient from  'socket.io-client';

const socket = socketIOClient('http://127.0.0.1:5000');
// const socket = null;

export default socket;