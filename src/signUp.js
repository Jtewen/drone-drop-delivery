import React from 'react';
import Dialog from '@mui/material/Dialog';
import Form from './Form';

const SignUp = ({ open, handleClose,}) => {


    
  const verifyAddr = (zip, addr) => {
    response = get
  }

  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} verifyAddr={verifyAddr} />
    </Dialog>
  );
};

export default SignUp;