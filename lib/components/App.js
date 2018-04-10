import React from 'react';
import './App.css';

import SelectFood from './SelectFood/SelectFood';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SelectFood></SelectFood>
      </div>);
  }
}