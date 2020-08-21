import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/Marker';
import { connect } from 'react-redux';
import { Data } from './actions/DataCovid';

const Map = (props: any) => {
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      // mapTypeControl: true,
      streetViewControl: false,
      zoomControl: true,
      maxZoom: 10,
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
  const [center, setCenter] = useState({ lat: 1, lng: 1 });
  const [zoom, setZoom] = useState(1);


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        {props.listData.map((data: Data) => {
          return (
            <Marker
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
              cases={data.cases}
              country={data.country}
              deaths={data.deaths}
              recovered={data.recovered}
              flag={data.countryInfo.flag}
              casesPerOneMillion={data.casesPerOneMillion}
              recoveredPerOneMillion={data.recoveredPerOneMillion}
              deathsPerOneMillion={data.deathsPerOneMillion}
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
