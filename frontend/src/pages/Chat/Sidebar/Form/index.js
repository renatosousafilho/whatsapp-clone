import React, { useState } from 'react';
import { PersonAdd } from '@material-ui/icons';

import './styles.scss'
import socketClient from '../../../../utils/socketClient';

function Form() {
  const [username, setUsername] = useState('');

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      socketClient.emit('chat.addUser', username)
    }
  };


  return <div className="sidebar__search">
      <div className="search__area">
        <PersonAdd className="search__icon" />
        <input 
          type="text" 
          className="search__field" 
          placeholder="Preencha seu nome para entrar no chat"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          />
      </div>
  </div>;
}

export default Form;