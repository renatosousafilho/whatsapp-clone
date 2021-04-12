import React from 'react';

import './styles.scss';

function MessageBox({ msg, user }) {
  return (
    <div
    className="message"
    style={user.id === msg.author ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}
    >
      <div
      className="message__item"
      style={user.id === msg.author ? { backgroundColor: '#DCF8C6' } : { backgroundColor: '#FFFFFF' }}
      >
        <div className="message__text">{msg.body}</div>
        <div className="message__date">19:50</div>
      </div>
    </div>
    );
  }
  
  export default MessageBox;