import React from 'react';

const style = {
  macroRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  }
};

const check = (value) => value || value === 0 ? value : '-';

const Macros = ({ protein, carbs, fat, cal }) => (
  <dl style={style.macroRow}>
    <dt>Protein: {check(protein)}</dt><dt>Carbs: {check(carbs)}</dt><dt>Fat: {check(fat)}</dt><dt>Kcal: {check(cal)}</dt>
  </dl>);

export default Macros;