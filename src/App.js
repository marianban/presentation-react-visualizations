import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart } from './line-chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart />
      </div>
    )
  }
}

export default App;
