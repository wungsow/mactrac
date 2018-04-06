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
        <table>
          <thead>
            <tr><th>Name</th><th>Protein</th><th>Carbs</th><th>Fat</th><th>Kcal/100g</th><th>Per serving</th></tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => (<FoodListItem key={index} {...item}></FoodListItem>))}
          </tbody>
        </table>
      ) :
      '';
  }
}

FoodList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
};

export default FoodList;