import React from 'react';
import Map from '../3D_globe/Map';
import { connect } from 'react-redux';
import { Data, fetchDatas } from '../actions/DataCovid';
import { StoreState } from '../reducers/index';
import OthersData from '../OthersData';
// import Test from '../test';

import Grid from '@material-ui/core/Grid';

// import Globe from 'react-globe.gl';

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
    // console.log(this.props.datas);
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <OthersData />
          </Grid>
          <Grid item xs={9}>
            <Map />
          </Grid>
        </Grid>
        {/* <Test /> */}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { datas: Data[] } => {
  return { datas: state.datas };
};
export const App = connect(mapStateToProps, { fetchDatas })(_App);
