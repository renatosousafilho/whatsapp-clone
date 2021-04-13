import React, { useEffect, useState } from 'react';

import './styles.css';

import Sidebar from './Sidebar';
import Body from './Body';
import socketClient from '../../utils/socketClient';

function Chat() {
  const initialValue = {
    id: 1234,
    avatar: '',
    name: 'Washington Campos',
  };

  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    socketClient.on('chat.currentUser', (user) => {
      setUser(user);
    })
  }, []);

  return (
    <div className="chat">
      <Sidebar user={user} />
      <Body user={user} />
    </div>
  );
}

export default Chat;