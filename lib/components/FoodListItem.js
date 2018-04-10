import React from 'react';
import style from './FoodListItem.css';

const FoodListItem = ({ name, protein, carbs, fat, cal, servingSize }) => {
  const serving = servingSize ? `${Math.round(servingSize * cal)} (${Math.round(servingSize * 100)}g)` : '-';
  return (
    <div className={style.container}>
      <div className={style.description}><span className={style.name}>{name}</span><span>{cal}</span></div>
      <div className={style.macroBar}>
        <div style={{flex: protein, backgroundColor: 'blue'}}></div><div style={{flex: carbs, backgroundColor: 'yellow'}}></div><div style={{flex: fat, backgroundColor: 'red'}}></div>
      </div>
    </div>
  );
};

export default FoodListItem;