import { Button, TextField } from '@mui/material';
import { useState } from 'react';

  const Form = ({ handleClose, verifyAddr }) => {
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(firstName, lastName, zip, address);
      verifyAddr(zip, address)
      handleClose();
    };
  
    return (
      <form className='form' onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          label="Zip Code"
          variant="filled"
          required
          type="number"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
        <TextField
          label="Street Address"
          variant="filled"
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    );
  };
  
  export default Form;