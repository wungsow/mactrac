import React from 'react';

const style = {
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
  },
  label: {
    marginRight: 10
  },
  input: {
    flex: 1,
    minWidth: 20
  },
  span: {
    marginLeft: 10
  }
};

const TextInput = ({ value, onChange, name, id, units, label, number }) => (
  <div style={style.row}>
    {label && <label style={style.label} htmlFor={id || name}>{label}</label>}
    <input style={style.input} id={id || name} autoComplete="off" type={number? 'number' : 'text'} name={name} value={value} onChange={onChange} />
    {units && <span style={style.span}>{units}</span>}
  </div>);

export default TextInput;