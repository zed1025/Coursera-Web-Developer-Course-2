import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
// import {DISHES} from './shared/dishes';

class App extends Component{

  render() {
    return (
      <div>
        {/* "dishes" that is in the state of App component is made available to the Menu component through "props" */}
        <Main />
      </div>
    );
  }
}

export default App;
