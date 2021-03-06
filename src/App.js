import React, { Component } from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

// 1 - скачать пакет react-router-dom
import {Route, Switch} from 'react-router-dom'; // 2 - импортировать объект route и browserRouter, который обрамляет ко, в котором содержится объект Route
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    // 3 - обрамить контент, где содержится объект Route
      <div className="app-wrap">
        <Header />
        <NavBar state={props.state.NavBar}/>
        <div className='main-part'>
          {/* Вставить теги-компоненты Route, прописать какой тег они будут выводить (component),
          а также url путь, который они будут считывать из браузерной строки (path) */}
          <Switch>
            <Route exact path='/' render={() => <Profile state={props.state.ProfilePage} dispatch={props.dispatch} />} />
            <Route path='/Dialogs' render={() => <Dialogs state={props.state.DialogPage} dispatch={props.dispatch} />} />
            <Route path='/Profile' render={() => <Profile state={props.state.ProfilePage} dispatch={props.dispatch} />} />
            <Route path='/News' component={News} />
            <Route path='/Music' component={Music} />
            <Route path='/Settings' component={Settings} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
