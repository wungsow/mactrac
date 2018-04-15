import React from 'react';
import PropTypes from 'prop-types';
import FoodListItem from './FoodListItem';

const FoodList = ({ items = [], onItemClick }) =>
  (items.map((item, index) => (<FoodListItem key={index} food={item} onClick={onItemClick}></FoodListItem>)));

FoodList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  onItemClick: PropTypes.func.isRequired
};

export default FoodList;