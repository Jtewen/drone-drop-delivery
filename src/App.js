import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import SignUp from './signUp';

export default function App() {

  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Drone Drop Delivery</h1>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Signup
        </Button>
        <SignUp open={open} handleClose={handleClose}/>
      </header>
    </div>
  );
}
