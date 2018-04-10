import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
  static defaultProps = {
    items: []
  }
  state = {}
  render() {
    return this.props.items.length ?
      (<div> {this.props.items.map((item, index) => (<FoodListItem key={index} food={item} onClick={this.props.onItemClick}></FoodListItem>))}</div>)
      : null;
  }
}

FoodList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  onItemClick: PropTypes.func.isRequired
};

export default FoodList;