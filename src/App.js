import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Moscow</h2>
        </div>
        <div className="container">
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
