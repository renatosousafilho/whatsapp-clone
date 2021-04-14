import React from 'react';

import './styles.scss';

import Chats from './Chats';
import Form from './Form';
import Header from './Header';

function Sidebar({user}) {
  return (
    <aside
      className="sidebar"
      style={{ display: 'flex' }}
    >
      <div className="default">
        <Header showModal={true} user={user} />
        <Form />
        <Chats />
      </div>
      {/* <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
      <SidebarModal showModal={showModal} setShowModal={setShowModal} /> */}
    </aside>
  );
}

export default Sidebar;