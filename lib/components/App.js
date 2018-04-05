import React from 'react';

import Search from './Search';

export default class App extends React.Component {
  state = {
    answer: 42
  };
  asyncFunc = () => {
    return Promise.resolve(33);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  onSearchSubmit = (searchTerm) => {
    console.log(`Submitted ${searchTerm}!!`);
  }

  render() {
    return (<Search onSearchSubmit={this.onSearchSubmit}></Search>);
  }
}