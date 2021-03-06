import React from 'react';
import F from './../Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
  return (
    <NavLink to={props.item.ref} className={F.friends__item} id={props.item.id}>
      <img className={F.friend__img} src={props.item.imgUrl} alt='' />
      <p className={F.friend__name}>{props.item.name}</p>
    </NavLink>
  );
};


export default Friend;