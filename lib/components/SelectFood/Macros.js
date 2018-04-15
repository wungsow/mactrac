import React from 'react';
import PropTypes from 'prop-types';
import { check } from '../Shared/Utils';

const style = {
  macroRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  }
};

const Macros = ({ protein, carbs, fat, cal }) => (
  <dl style={style.macroRow}>
    <dt>Protein: {check(protein)}</dt><dt>Carbs: {check(carbs)}</dt><dt>Fat: {check(fat)}</dt><dt>Kcal: {check(cal)}</dt>
  </dl>);

Macros.propTypes = {
  protein: PropTypes.number,
  carbs: PropTypes.number,
  fats: PropTypes.number,
  cal: PropTypes.number
};

export default Macros;

