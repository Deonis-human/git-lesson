import React from 'react';
import N from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

// для того, чтобы определить элементу два класса, необходимо: сделать следующее.
const styleStr = `${N.item} ${N.add_margin}`;
// `` - появилось в ES6, говорит о том, что далее идёт JS код

const NavBar = (props) => {
  return (
    <div className={N.nav__wrap}>
      <nav className={N.nav_menu}>
        <div className={N.nav_menu__links}>
          <NavLink exact to='/Profile' activeClassName={N.item_active} className={N.item}>Profile</NavLink>
          {/* работает нестрогое сравнение (без exact prop), главное, чтобы первой ссылкой было /Dialogs */}
          <NavLink to='/Dialogs/' activeClassName={N.item_active} className={N.item}>Messages</NavLink>
          <NavLink to='/News' activeClassName={N.item_active} className={N.item}>News</NavLink>
          {/* описывать стили activeStyle можно прямо посреди тегов, в отличие от activeClassName */}
          <NavLink to='/Music' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }} className={N.item}>Music</NavLink>
          {/* демонстрация объединения строк в jsx и обращение к литералам (свойствам) объекта через квадратнеы скобки */}
          <NavLink to='/Settings' activeClassName={N.item_active} className={`${N.item} ${N['add-margin']}`}>Settings</NavLink>
        </div>
      </nav>
      <Friends FriendsData={props.state.FriendsData} />
    </div>
  )
}

export default NavBar;