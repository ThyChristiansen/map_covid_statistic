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
    todayRecovered,
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
            marginBottom: '7px',
          }}
        />
        <br />
        <span style={{ fontWeight: 'bold' }}>Country: {country}</span>
        <br />
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <th>Recovered</th>
            <th>Cases</th>
            <th>Deaths</th>
          </tr>
          <tr>
            <td>{recovered}</td>
            <td>{cases}</td>
            <td>{deaths}</td>
          </tr>
          <tr>
            <td>+ {todayRecovered}</td>
            <td>+ {todayCases}</td>
            <td>+ {todayDeaths}</td>
          </tr>
        </table>
      </div>
    ) : null;

  let displayCases = cases.toString();
  if (cases > 1000) {
    displayCases = `${displayCases.slice(0, -3)}k+`;
  }

  return (
    <div>
      <div
        className="pin"
        style={{ backgroundColor: '#3d4d8da3' }}
        onClick={handleClick}
      >
        <span style={{ color: 'white' }}>{displayCases}</span>
      </div>
      <div>
        <InfoWindow show={show} />
      </div>
    </div>
  );
};

export default Marker;
