import React from 'react';
import PropTypes from 'prop-types';

import style from './FoodListItem.css';

const FoodListItem = ({ food, onClick }) => {
  const { name, protein, carbs, fat, cal, servingSize } = food;
  const serving = servingSize ? `${Math.round(servingSize * cal)} (${Math.round(servingSize * 100)}g)` : '-';
  return (
    <div className={style.container} onClick={() => onClick(food)}>
      <div className={style.description}><span className={style.name}>{name}</span><span>{cal}</span></div>
      <div className={style.macroBar}>
        <div style={{ flex: protein, backgroundColor: 'blue' }}></div><div style={{ flex: carbs, backgroundColor: 'yellow' }}></div><div style={{ flex: fat, backgroundColor: 'red' }}></div>
      </div>
    </div>
  );
};

FoodListItem.propTypes = {
  food: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FoodListItem;