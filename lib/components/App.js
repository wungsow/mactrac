import React from 'react';
import axios from 'axios';

import Search from './Search';
import FoodList from './FoodList';

export default class App extends React.Component {
  state = {
    answer: 42,
    items: [],
    loading: false
  };
  asyncFunc = () => {
    return Promise.resolve(33);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  async performSearch(searchTerm) {
    try {
      this.setState({ loading: true, items: [] });
      const searchResult = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1&page_size=50`);

      const items = searchResult.data && searchResult.data.products ? searchResult.data.products : [];

      this.setState({
        items: items.map(item => ({ name: item.product_name })),
        loading: false
      });
    } catch (ex) {
      this.setState({ loading: true });
    }
  }
  onSearchSubmit = (searchTerm) => {
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.onSearchSubmit}></Search>
        {this.state.loading ? 'Loading..' : ''}
        <FoodList items={this.state.items}></FoodList>
      </div>);
  }
}