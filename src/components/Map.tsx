import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const Map = (props: any) => {
    const [center, setCenter] = useState({lat: 0, lng: 0 });
    const [zoom, setZoom] = useState(1);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={11.0168}
            lng={76.9558}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;


 
