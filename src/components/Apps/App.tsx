import React from 'react';
import Map from '../Map';
import { connect } from 'react-redux';
import { Data, fetchDatas } from '../actions/DataCovid';
import { StoreState } from '../reducers/index';
import OthersData from '../OthersData';


import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { datas: Data[] } => {
  return { datas: state.datas };
};
export const App = connect(mapStateToProps, { fetchDatas })(_App);
