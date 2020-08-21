import React, { useState } from 'react';
import './Marker.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    paddingLeft: '95%',
  },
  pos: {
    marginBottom: 12,
  },
  country_name: {
    marginBottom: '10px',
  },
});

const Marker = (props: any) => {
  const {
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

  const classes = useStyles();

  const handleClick = () => {
    setShow(!show);
  };
  const InfoWindow = (props: any) =>
    props.show ? (
      <div className="info_window">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              onClick={handleClick}
            >
              x
            </Typography>
            <img height="30px" src={flag} alt="flag_image" />
            <Typography
              className={classes.country_name}
              variant="subtitle1"
              component="h2"
            >
              {country}
            </Typography>
            <table style={{ width: '100%', textAlign: 'center' }}>
              <tr>
                <th>Recovered</th>
                <th>Cases</th>
                <th>Deaths</th>
              </tr>
              <tr>
                <td>{recovered.toLocaleString()}</td>
                <td>{cases.toLocaleString()}</td>
                <td>{deaths.toLocaleString()}</td>
              </tr>
              <tr>
                <td>+ {todayRecovered.toLocaleString()}</td>
                <td>+ {todayCases.toLocaleString()}</td>
                <td>+ {todayDeaths.toLocaleString()}</td>
              </tr>
            </table>
          </CardContent>
        </Card>
      </div>
    ) : null;

  let displayCases = cases.toString();
  let changingColor;
  let changingSizeWidth;
  let changingSizeHeight;

  if (cases > 0) {
    changingColor = '#90a6e89e';
    changingSizeWidth= '2.6em'
    changingSizeHeight= '2.6em'
  } 
  if (cases > 500) {
    changingColor = '#7c96e49e';
    changingSizeWidth= '2.6em'
    changingSizeHeight= '2.6em'
  } 
  if (cases > 1000) {
    displayCases = `${displayCases.slice(0, -3)}k+`;
    changingColor = '#6786e69e';
    changingSizeWidth= '3.6em'
    changingSizeHeight= '3.6em'
  } 
  if (cases > 5000) {
    changingColor = '#5573cf9e';
    changingSizeWidth= '4.6em'
    changingSizeHeight= '4.6em'
  } 
   if (cases > 10000) {
    changingColor = '#3b57ab9e';
    changingSizeWidth= '5.6em'
    changingSizeHeight= '5.6em'
  } 
  if (cases > 50000) {
    changingColor = '#263b7c9e';
    changingSizeWidth= '6.6em'
    changingSizeHeight= '6.6em'
  } 
  if (cases > 100000) {
    changingColor = '#19295a9e';
    changingSizeWidth= '7.6em'
    changingSizeHeight= '7.6em'
  } 
  if (cases > 1000000) {
    changingColor = '#0b132b9e';
    changingSizeWidth= '8.6em'
    changingSizeHeight= '8.6em'
  }

  return (
    <div>
      <div
        className="pin"
        style= {{backgroundColor:changingColor, width: changingSizeWidth , height: changingSizeHeight}}
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
