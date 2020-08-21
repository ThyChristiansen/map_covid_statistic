import React, { useState, useEffect, useRef } from 'react';
import Map from '../Map';
import { connect } from 'react-redux';
import { Data, fetchDatas } from '../actions/DataCovid';
import { StoreState } from '../reducers/index';
import OthersData from '../OthersData';

import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Globe from 'react-globe.gl';

export interface AppProps {
  datas: Data[];
  fetchDatas(): any;
}



class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchDatas();
  }

  // renderList(): JSX.Element[] {
  //   return this.props.datas.map((data: Data, i) => {
  //     return <div key={data.country}>{data.cases},</div>;
  //   });
  // }

  render() {
    console.log(this.props.datas);
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <OthersData listData={this.props.datas} />
          </Grid>
          <Grid item xs={9}>
            <Map listData={this.props.datas} />
          </Grid>
        </Grid>
        <Globe
          // ref={globeEl}
          waitForGlobeReady={true}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={this.props.datas}
          labelLat={38}
          labelLng={-97}
          labelText="34sdf"
          labelSize={23}
          labelDotRadius={23}
          labelColor={() => 'rgba(255, 165, 0, 0.75)'}
          labelResolution={2}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { datas: Data[] } => {
  return { datas: state.datas };
};
export const App = connect(mapStateToProps, { fetchDatas })(_App);
