import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { getThemeProps } from "@mui/system";

const containerStyle = {
    width: '90vw',
    height: '75vh'
  };
  
  const center = {
    lat: 40.5,
    lng: -88.99
  };
  
  function Map(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAE5JHzWwBna6Oa5c1tNLbnK14Du4VS7s0"
    })
  
    const [map, setMap] = React.useState(null)
  
    return isLoaded ? (
        <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
            >
            <div>{props.posArray}</div>
                
            </GoogleMap>
        </div>

    ) : <></>
  }
  
  export default React.memo(Map)