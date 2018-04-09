import React from 'react';
import axios from 'axios';

import Search from './Search';
import FoodList from './FoodList';
import Spinner from './Spinner';

const pageSize = 50;

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
        {this.state.remaining && <button onClick={this.loadMore}>Load more ({this.state.remaining} remaining)...</button>}
      </div>);
  }

  loadMore = () => {
    this.performSearch();
  }

  performSearch = async (searchTerm) => {
    try {
      const newSearch = !!searchTerm;
      this.setState((state) => ({ loading: true, items: newSearch ? [] : state.items, remaining: null }));
      const page = newSearch ? 1 : this.state.page + 1;

      searchTerm = newSearch ? searchTerm : this.state.searchTerm;
      const searchResult = await this.searchFood(searchTerm, page);

      const data = searchResult && searchResult.data,
        items = data && data.products ? data.products : [],
        remaining = data.count - (pageSize * page);

      this.setState((state) => ({
        items: state.items.concat(this.mapFoodsToVM(items)),
        loading: false,
        page,
        searchTerm,
        remaining: remaining > 0 ? remaining : null
      }));
    } catch (ex) {
      this.setState({ loading: true });
    }
  }

  searchFood(searchTerm, page) {
    return axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1&page_size=${pageSize}&page=${page}&tagtype_0=languages&tag_contains_0=contains&tag_0=English`);
  }

  mapFoodsToVM(foods = []) {
    return foods.filter(food => food.nutriments && food.nutriments.energy_100g).map(food => ({
      name: food.product_name,
      protein: round(food.nutriments.proteins_100g),
      fat: round(food.nutriments.fat_100g),
      carbs: round(food.nutriments.carbohydrates_100g),
      cal: round(food.nutriments.energy_100g / 4.2),
      servingSize: food.serving_quantity / 100
    }));
  }
}

export default SearchFood;

const round = (number) => {
  return isNaN(number) ? number : Math.round(number);
};