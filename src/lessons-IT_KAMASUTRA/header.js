import React from 'react'; // сейчас для считывания разметки JSX необязательно подключать модуль React 
import logo from './../logo.svg';
// компонента - это функция, возвращающая разметку JSX
const Header = () => { // новая компонента. Компонента - это тег
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        It's Denis'es project, детка <br />Edit <code>src/App.js</code> and save to reload.
          </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
          </a>
    </header>
  )
}

export default Header;