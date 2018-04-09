import React from 'react';
import './FoodListItem.css';

const FoodListItem = ({ name, protein, carbs, fat, cal, servingSize }) => {
  const serving = servingSize ? `${Math.round(servingSize * cal)} (${Math.round(servingSize * 100)}g)` : '-';
  return (
    <tr ><td>{name}</td><td>{protein}</td><td>{carbs}</td><td>{fat}</td><td>{cal}</td><td>{serving}</td></tr>
  );
};

export default FoodListItem;