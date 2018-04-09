import React from 'react';
import axios from 'axios';

import Search from './Search';
import FoodList from './FoodList';
import Spinner from './Spinner';
import FoodSearchService from '../services/FoodSearchService';

class SearchFood extends React.Component {

  state = {
    items: [],
    loading: false,
    page: 1,
    searchTerm: '',
    remaining: null
  };

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.performSearch}></Search>
        <FoodList items={this.state.items}></FoodList>
        <Spinner show={this.state.loading}></Spinner>
        {this.state.remaining && <button onClick={() => this.performSearch()}>Load more ({this.state.remaining} remaining)...</button>}
      </div>);
  }

  loadMore = () => {
    this.performSearch();
  }

  performSearch = async (searchTerm) => {
    try {
      const page = searchTerm ? 1 : this.state.page + 1;

      this.setState((state) => ({ loading: true, items: searchTerm ? [] : state.items, remaining: null }));

      const { items, remaining } = await FoodSearchService.searchFood(searchTerm || this.state.searchTerm, page);

      this.setState((state) => ({
        items: state.items.concat(items),
        loading: false,
        page,
        searchTerm,
        remaining
      }));
    } catch (ex) {
      this.setState({ loading: false });
    }
  }
}

export default SearchFood;