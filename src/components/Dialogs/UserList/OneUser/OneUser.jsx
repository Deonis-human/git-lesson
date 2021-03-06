import React from 'react';
import OU from './OneUser.module.css';
import { NavLink } from 'react-router-dom';

const OneUser = (props) => {
  const path = '/Dialogs/' + props.id;
  return (
    <p className={OU.dialog__item}>
      <NavLink to={path} activeClassName={OU.dialog_active}>
        {props.name}
      </NavLink>
    </p>
  );
}

export default OneUser;