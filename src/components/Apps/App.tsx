import React from 'react';
import Map from '../Map';
import { connect } from 'react-redux';
import { Data, fetchDatas } from '../actions/DataCovid';
import { StoreState } from '../reducers/index';
import OthersData from '../OthersData';

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
        <OthersData listData={this.props.datas} />
        <Map listData={this.props.datas} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { datas: Data[] } => {
  return { datas: state.datas };
};
export const App = connect(mapStateToProps, { fetchDatas })(_App);
