import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import { connect } from 'react-redux';
import { Data } from '../actions/DataCovid';
// import Globe from 'react-globe.gl';
// import {Abc} from './test';

const Map = (props: any) => {
  // const globeEl: any = useRef();

  // useEffect(() => {
  //   globeEl.current.controls().autoRotate = true;
  //   globeEl.current.controls().autoRotateSpeed = 0.3;
  //   globeEl.current.pointOfView({ altitude: 4 }, 5000);
  // }, []);


  // console.log(x);
 
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      // mapTypeControl: true,
      streetViewControl: false,
      zoomControl: true,
      maxZoom: 10,
      fullscreenControl: true,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#212f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#000' }],
        },

        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }],
        },

        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }],
        },
      ],
    };
  };

  // const { aaa } = props;

  const [center, setCenter] = useState({ lat: 1, lng: 1 });
  const [zoom, setZoom] = useState(1);
  // const [altitude, setAltitude] = useState(0.1);
  // const [transitionDuration, setTransitionDuration] = useState(1000);
  // const [places, setPlaces] = useState([]);

  // setTimeout(() => {
  //   setTransitionDuration(4000);
  //   setAltitude((feat: any): any => (feat) =>
  //     Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
  //   );
  // }, 3000);

  const handleCenter = () => {
    // let newCenter = ;
    // setCenter(newCenter);
    // console.log(newCenter);

  };

//  console.log(props)

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        options={getMapOptions}
        onClick={handleCenter}
      >
        {props.reduxState.datas.map((data: Data) => {
          return (
            <Marker
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
              cases={data.cases}
              country={data.country}
              deaths={data.deaths}
              recovered={data.recovered}
              flag={data.countryInfo.flag}
              todayCases={data.todayCases}
              todayDeaths={data.todayDeaths}
              todayRecovered={data.todayRecovered}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
const putReduxStateOnState = (reduxState: any) => ({ reduxState });

export default connect(putReduxStateOnState)(Map);
