import React from 'react';
import H_style from './Header.module.css';


const Header = () => {
  return (
    // грамотно это делается вот так:
    <header className={H_style.header}>
      <img className={H_style.header__logo} src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_1280.png' alt='logo' />
    </header>
  );
}


export default Header;