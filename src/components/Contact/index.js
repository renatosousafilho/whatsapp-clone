import React from 'react';

import './style.scss';
import { useChatScreenDispatch } from '../../contexts/chat-screen';
import { useContactsDispatch } from '../../contexts/contacts';

function Contact({
  id, name, avatar, lastMessage, timeLastMessage, lastSeen, pinned, mute, unreadMessages,
}) {
  const dispatchChatScreen = useChatScreenDispatch();
  const dispatchContactsData = useContactsDispatch();

  const handleClick = () => {
    dispatchContactsData({
      type: 'SET_CONTACTS_DATA',
      payload: {
        id,
        name,
        avatar,
        lastMessage,
        timeLastMessage,
        lastSeen,
        pinned,
        mute,
        unreadMessages,
      },
    });
    dispatchChatScreen({
      type: 'DISPLAY',
    });
    // setHidden(false);
  };


  return (
   <div className="contacts__container" onClick={handleClick}>
      <img src={avatar} alt={name} className="contacts__img" />
      <div className="contacts__texts">
        <h3 className="texts__name">{name}</h3>
        <span className="texts__lastMessage">{lastMessage}</span>
      </div>
      <div className="contacts__details">
        <span className="details__time">{timeLastMessage}</span>
        {/* {hidden && (
          <div className="details__unreadMessage">
            {unreadMessages}
          </div>
        )} */}
        {/* <ExpandMore className="details__icon options" /> */}
      </div>
  </div>);
}

export default Contact;