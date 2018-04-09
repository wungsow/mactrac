import React from 'react';

const style = {
  textAlign: 'center',
  padding: '10px'
};

const Spinner = ({ show }) => {
  return show ? (<div style={style}>Loading...</div>) : '';
};

export default Spinner;