import React from 'react';

import Search from './Search';
import FoodList from './FoodList';
import Spinner from '../Spinner';
import ModalDialog from '../ModalDialog';
import FoodSearchService from './FoodSearchService';
import FoodAmount from './FoodAmount';

const style = {
  button: {
    display: 'block',
    margin: '10px auto'
  }
};

class SelectFood extends React.Component {

  state = {
    items: [],
    loading: false,
    page: 1,
    newSearchTerm: '',
    remaining: null,
    selectedItem: null
  };

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.performSearch}></Search>
        <FoodList items={this.state.items} onItemClick={this.selectItem}></FoodList>
        <Spinner show={this.state.loading}></Spinner>
        {this.state.remaining && <button style={style.button} onClick={() => this.performSearch()}>Load more ({this.state.remaining} remaining)</button>}
        <ModalDialog show={this.state.selectedItem}>
          <FoodAmount food={this.state.selectedItem} onCancel={this.cancelAdd} onAdd={this.addEntry}></FoodAmount>
        </ModalDialog>
      </div>);
  }

  cancelAdd = () => {
    this.setState({ selectedItem: null });
  }

  selectItem = (item) => {
    this.setState({ selectedItem: item });
  }

  addEntry = () => {
    console.log('Entry add!');
    this.cancelAdd();
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

export default SelectFood;