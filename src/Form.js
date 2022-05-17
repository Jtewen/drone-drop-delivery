import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

  const Form = ({ handleClose, verifyAddr }) => {
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(firstName, lastName, city, address);
      verifyAddr(firstName, lastName, city, state, address);
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
          label="City"
          variant="filled"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <TextField
          label="State"
          variant="filled"
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <TextField
          label="Location"
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
            Verify
          </Button>
        </div>
      </form>
    );
  };
  
  export default Form;