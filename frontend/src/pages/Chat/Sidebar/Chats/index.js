import React, { useEffect, useState } from 'react';

import './styles.scss';
import Contacts from '../../../../utils/data';

// import Contacts from '../../../../utils/data';
import Contact from '../../../../components/Contact';
import socketClient from '../../../../utils/socketClient';

function Chats() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socketClient.on('chat.updateUsers', (users) => {
      setUsers(users.filter((u) => u.id !== socketClient.id));
    })
  });

  return (
    <div className="sidebar__chats">
      {users.map(({
      id, name, avatar
    }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        avatar={avatar}
      />
    ))}
    </div>
  );
}

export default Chats;