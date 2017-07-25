import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

import { TimerStore } from './stores/Timer.Store.js';
import { useStrict } from 'mobx';

class App extends Component {
  render() {

    const timerStore = new TimerStore();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Main timerStore={timerStore}/>
      </div>
    );
  }
}

export default App;