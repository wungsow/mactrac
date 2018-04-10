import React from 'react';

import Search from './Search';
import FoodList from './FoodList';
import Spinner from './Spinner';
import FoodSearchService from '../services/FoodSearchService';
import style from './SearchFood.css';

class SearchFood extends React.Component {

  state = {
    items: [],
    loading: false,
    page: 1,
    newSearchTerm: '',
    remaining: null
  };

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.performSearch}></Search>
        <FoodList items={this.state.items}></FoodList>
        <Spinner show={this.state.loading}></Spinner>
        {this.state.remaining && <button className={style.center} onClick={() => this.performSearch()}>Load more ({this.state.remaining} remaining)</button>}
      </div>);
  }

  performSearch = async (newSearchTerm) => {
    try {
      const page = newSearchTerm ? 1 : this.state.page + 1,
        searchTerm = newSearchTerm || this.state.searchTerm;

      this.setState((state) => ({ loading: true, items: newSearchTerm ? [] : state.items, remaining: null }));

      const { items, remaining } = await FoodSearchService.searchFood(searchTerm, page);

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