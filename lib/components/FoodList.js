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
      (
        <div> {this.props.items.map((item, index) => (<FoodListItem key={index} {...item}></FoodListItem>))}</div>
      ) :
      '';
  }
}

FoodList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
};

export default FoodList;