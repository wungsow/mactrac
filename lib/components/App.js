import React from 'react';

import Search from './Search';
import FoodList from './FoodList';

export default class App extends React.Component {
  state = {
    answer: 42,
    items: [{ name: 'One' }, { name: 'Two' }]
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
    return (
      <div>
        <Search onSearchSubmit={this.onSearchSubmit}></Search>
        <FoodList items={this.state.items}></FoodList>
      </div>);
  }
}