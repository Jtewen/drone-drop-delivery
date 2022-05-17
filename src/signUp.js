import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Form from './Form';
import axios from "axios";
import { Button, TextField } from '@mui/material';
import Geocode from "react-geocode";
const SmartySDK = require("smartystreets-javascript-sdk");
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;


const SignUp = ({ open, handleClose, passUpAddr,}) => {

    const [addr, setAddr] = useState('');
    const [geo, setGeo] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [verified, setVerified] = useState(false);

    //Smarty API
    let key = "122155179722146284";
    const credentials = new SmartyCore.SharedCredentials(key);
    let clientBuilder = new SmartyCore.ClientBuilder(credentials).withLicenses(["us-core-cloud"]);
    let client = clientBuilder.buildUsStreetApiClient(); 

    //Google API
    Geocode.setApiKey("AIzaSyAE5JHzWwBna6Oa5c1tNLbnK14Du4VS7s0");

    const verifyAddr = async (firstname, lastname, city, state, addr) => {
        console.log(` testing: ${addr} ${city} ${state} `)
        Geocode.fromAddress(`${addr} ${city} ${state} `).then(
            (response) => {
              console.log(response.results[0].geometry.location);
              setAddr(response.results[0].formatted_address);
              setGeo(response.results[0].geometry.location);
              setFname(firstname);
              setLname(lastname);
              setVerified(true);
            },
            (error) => {
              setAddr("No matches");
              console.error(error);
            }
          );
    }

    const handleSubmit = e => {
        console.log("close now")
        passUpAddr(geo, fname, lname);
        setAddr('');
        setVerified(false);
        handleClose();
      };

  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Form handleClose={handleClose} verifyAddr={verifyAddr} />
        <div>
            <h2>{addr}</h2>
        </div>
      </DialogContent>
      
      <DialogActions>
        <Button type="submit" variant="contained" color="primary" disabled={!verified} onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>


    </Dialog>
  );
};

export default SignUp;