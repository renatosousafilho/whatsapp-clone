import React from 'react';

import './styles.css';

import Sidebar from './Sidebar';
import Body from './Body';

function Chat() {
  const user = {
    id: 1234,
    avatar: '',
    name: 'Washington Campos',
  };

  return (
    <div className="chat">
      <Sidebar />
      <Body user={user} />
    </div>
  );
}

export default Chat;