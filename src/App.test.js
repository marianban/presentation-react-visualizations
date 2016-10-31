import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { generateData } from './line-chart'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('generateData', () => {
  console.log(generateData(1000))
  console.log(Math.min(...generateData(1000)))
  console.log(Math.max(...generateData(1000)))
})
