import React from 'react';
import D from './Dialogs.module.css';
import Messages from './Messages/Messages';
import UserList from './UserList/UserList';

const Dialogs = (props) => {
  return (
    <div>
      <div className={D.dialogs__content}>
        <UserList Data={props.state.UsersData}/> 
        <Messages MessagesData={props.state.MessagesData} dispatch={props.dispatch} />
      </div>
    </div>
  );
}

export default Dialogs;