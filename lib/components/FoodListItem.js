import React from 'react';
import styles from './FoodListItem.css';

const FoodListItem = ({ name, protein, carbs, fat, cal }) => {
  return (
    <tr><td>{name}</td><td>{protein}</td><td>{carbs}</td><td>{fat}</td><td>{cal}</td></tr>
  );
};

export default FoodListItem;