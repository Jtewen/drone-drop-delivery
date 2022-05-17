import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import SignUp from './signUp';
import Map from './Map';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


export default function App() {

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState([]);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const passUpAddr = (geo, fname, lname) => {
    var name = `${fname} ${lname}`
    var temp = [... pos];
    temp.push(<Marker title={name} position={geo} />);
    setPos(temp);
    console.log(pos);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Drone Drop Delivery</h1>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Signup
        </Button>
        <SignUp open={open} handleClose={handleClose} passUpAddr={passUpAddr}/>
        
      </header>
      <body className="Map">
        <Map posArray={pos}/>
      </body>
      
    </div>
  );
}
