import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{opacity:0.4,color:'blue',fontSize:'12px',backgroundColor:'white', width:'55px'}}>{text}</div>;


class Mapa extends Component {
  
  render() {
    const latD=this.props.lat;
    const lngD=this.props.lng;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '50%', margin:'0 auto', }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          zoom={12}
          center={{
              lat:latD,
              lng:lngD
          }}
        
        >
          <AnyReactComponent
            lat={latD}
            lng={lngD}
            text='Ubicación'
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Mapa;