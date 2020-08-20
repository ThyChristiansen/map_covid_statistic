import React from 'react';
import Map from '../Map';
import { connect } from 'react-redux';
import { Data, fetchDatas } from '../actions/DataCovid';
import { StoreState } from '../reducers/index';

interface AppProps {
  datas: Data[];
  fetchDatas(): any;
}

class _App extends React.Component<AppProps> {
  
  componentDidMount() {
    this.props.fetchDatas();
  }

  renderList(): JSX.Element[] {
    return this.props.datas.map((data: Data, i) => {
      return (
        <div key={data.country}
        // lat= {data.countryInfo.lat}
        >
          {/* {data.country}, */}
          {data.cases},
          {/* {data.countryInfo.lat},
          {data.countryInfo.long} */}

        </div>
      );
    });
  }

  render() {
    console.log(this.props.datas);
    return (
      <div>
        <Map listData={this.props.datas} />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { datas: Data[] } => {
  return { datas: state.datas };
};
export const App = connect(mapStateToProps, { fetchDatas })(_App);
