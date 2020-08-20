import React, { useState } from 'react';
import './Marker.css';

const Marker = (props: any) => {
  const {
    color,
    cases,
    country,
    deaths,
    recovered,
    flag,
    casesPerOneMillion,
    recoveredPerOneMillion,
    deathsPerOneMillion,
    todayCases,
    todayDeaths,
  } = props;
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const InfoWindow = (props: any) =>
    props.show ? (
      <div
        className="info_window"
        style={{
          color: '#black',
          width: 150,
          height: 'auto',
          backgroundColor: '#e3ebf2',
          display: 'float',
          position: 'relative',
          marginBottom: '200px',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <span
          style={{ paddingLeft: '95%', fontSize: '15px' }}
          onClick={handleClick}
        >
          x
        </span>
        <br />
        <img
          height="30px"
          src={flag}
          alt="flag_image"
          style={{
            marginLeft: '30%',
          }}
        />
        <br />
        <span style={{ fontWeight: 'bold' }}>Country: {country}</span>
        <br />
        Cases: {cases}
        <br />
        Deaths: {deaths}
        <br />
        Recovered: {recovered}
        <br />
        Today cases: {todayCases}
        <br />
        Today deaths: {todayDeaths}
        <br />
      </div>
    ) : null;

  return (
    <div>
      <div
        className="pin"
        style={{ backgroundColor: '#3d4d8da3' }}
        onClick={handleClick}
      >
        <span style={{ color: 'white' }}>{cases}</span>
      </div>
      <div>
        <InfoWindow show={show} />
      </div>
    </div>
  );
};

export default Marker;
