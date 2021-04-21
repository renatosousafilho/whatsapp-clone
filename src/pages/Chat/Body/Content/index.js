import React, { useState, useRef, useEffect } from 'react';

import './styles.scss'

import MessageBox from '../../../../components/MessageBox';

import { useContactsState } from '../../../../contexts/contacts';

import { IconButton } from '@material-ui/core';
import {
  Search,
  Attachment,
  MoreVert,
  ChevronLeft,
  InsertEmoticon,
  Mic,
  Send,
} from '@material-ui/icons';
import socketClient from '../../../../utils/socketClient';

function Content({ user }) {
  const { id, avatar, name, lastSeen } = useContactsState();

  const initialListMessages = [];

  const [listOfMessages, setListOfMessages] = useState(initialListMessages);
  const [text, setText] = useState('');

  const body = useRef(null);

   useEffect(() => {
    if (body.current && body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [avatar, listOfMessages]);

  useEffect(() => {
    socketClient.on('private.message', ({message, origin}) => {
      console.log(`chegou nova mensagem ${message}`);
      setListOfMessages([...listOfMessages, { author: origin, body: message }]);
    });
  }, [listOfMessages]);

  function sendMessage(e) {
    e.preventDefault();
    setListOfMessages([...listOfMessages, { author: user.id, body: text }]);
    socketClient.emit('private.message', { message: text, destination: id, origin: user.id });
    setText('');
  }

  return (
    <div className="body__chat">
      <header className="body__header">
        <div className="body__info">
          <ChevronLeft className="body__arrow-back"  />
          <img src={avatar} alt={name} className="body__profile-picture" />
          <div className="body__texts">
            <h2 className="body__name">{name}</h2>
            <span className="body__lastSeen">{`last seen today ${lastSeen}`}</span>
          </div>
        </div>
        <div className="body__options">
          <IconButton>
            <Search className="body__item" />
          </IconButton>
          <IconButton>
            <Attachment className="body__item" />
          </IconButton>
          <IconButton>
            <MoreVert className="body__item" />
          </IconButton>
        </div>
      </header>

      <section ref={body} className="body__wallpaper">
         {listOfMessages.map((msg, index) => (
          <MessageBox key={index} msg={msg} user={user} />
        ))}
      </section>

      <form className="body__text-area" onSubmit={sendMessage}>
        <IconButton><InsertEmoticon className="body__item" /></IconButton>
        <input
          value={text}
          type="text"
          placeholder="Type a message"
          className="body__field"
          onChange={(e) => setText(e.target.value)}
        />
        {!text ? (
          <IconButton><Mic className="body__item" /></IconButton>
        ) : (
          <IconButton><Send className="body__item" onClick={sendMessage} /></IconButton>
        )}
      </form>
    </div>
  );
}

export default Content;