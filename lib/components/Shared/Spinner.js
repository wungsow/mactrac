import React from 'react';

const style = {
  textAlign: 'center',
  padding: '10px'
};

const Spinner = ({ show }) => (show ? (<div style={style}>Loading...</div>) : null);

export default Spinner;