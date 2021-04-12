import React from 'react';

import './styles.scss';
import Contacts from '../../../../utils/data';

// import Contacts from '../../../../utils/data';
import Contact from '../../../../components/Contact';

function Chats() {
  return (
    <div className="sidebar__chats">
      {Contacts.map(({
      id, name, avatar, lastMessage, timeLastMessage, lastSeen, pinned, mute, unreadMessages,
    }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        avatar={avatar}
        lastMessage={lastMessage}
        timeLastMessage={timeLastMessage}
        lastSeen={lastSeen}
        pinned={pinned}
        mute={mute}
        unreadMessages={unreadMessages}
      />
    ))}
    </div>
  );
}

export default Chats;