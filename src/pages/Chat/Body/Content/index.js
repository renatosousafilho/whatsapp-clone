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

function Content({ user }) {
  const { avatar, name, lastSeen } = useContactsState();

  const initialListMessages = [
     {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 1234,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
  ];

  const [listOfMessages, setListOfMessages] = useState(initialListMessages);
  const [text, setText] = useState('');

  const body = useRef(null);

   useEffect(() => {
    if (body.current && body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [avatar, listOfMessages]);

  function sendMessage(e) {
    e.preventDefault();
    setListOfMessages([...listOfMessages, { author: 1234, body: text }]);
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
         {listOfMessages.map((msg) => (
          <MessageBox key={msg.body} msg={msg} user={user} />
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