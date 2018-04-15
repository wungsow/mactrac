import React from 'react';

const style = {
  mask: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0
  },
  dialog: {
    backgroundColor: 'white',
    margin: 10,
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
  }
};

const Dialog = ({ show, children }) => (show ? <div style={style.mask}><div style={style.dialog}>{children}</div></div> : null);

export default Dialog;