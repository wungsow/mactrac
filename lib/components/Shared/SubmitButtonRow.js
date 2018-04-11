import React from 'react';
import PropTypes from 'prop-types';

const style = {
  row: {
    display: 'flex'
  },
  spacer: {
    flex: 1,
    minWidth: 10
  }
};

const SubmitButtonRow = ({ onCancel, onSubmit, submitText, enabled }) => (
  <div style={style.row}>
    {onCancel && <button type='button' onClick={onCancel}>Cancel</button>}
    <div style={style.spacer}></div>
    <button onClick={onSubmit} disabled={!enabled}>{submitText || 'Submit'}</button>
  </div>
);

SubmitButtonRow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func
};

export default SubmitButtonRow;