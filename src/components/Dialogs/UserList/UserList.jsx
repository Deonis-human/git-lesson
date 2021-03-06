import React from 'react';
import OneUser from './OneUser/OneUser';
import UL from './UserList.module.css';

const UserList = (props) => {
  // const UsersData = props.UsersData; объект, который мы создаём выше, можно передать и через props в файле dialogs.jsx

  const Users = props.Data.map(
    user => user.name == 'Денис' ? <OneUser id={user.id} name={`${user.name} - Лучший`}/> :<OneUser id={user.id} name={user.name}/>
  );

  return (
    <div className={UL.dialogs__userList}>
      {
        Users
      }
    </div>
  );
}

export default UserList;