import React from 'react';

import './styles.scss';

import Chats from './Chats';
import Header from './Header';

function Sidebar() {
  return (
    <aside
      className="sidebar"
      style={{ display: 'flex' }}
    >
      <div className="default">
        <Header showModal={true} />
        {/* <Notification />
        <Search /> */}
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