// import React, { Component } from 'react';
// import {AppProps} from './Apps/App';
// import { connect } from 'http2';
// import { Data, fetchDatas } from './actions/DataCovid';
// import { StoreState } from './reducers/index';

// class OthersData extends React.Component<AppProps> {
//   componentDidMount() {
//     this.props.fetchDatas();
//   }
//   render() {
//     return (
//       <div
//         className="total_cases"
//         style={{
//           position: 'absolute',
//           right: '50px',
//           width: '200px',
//           height: '120px',
//           textAlign: 'center',
//         }}
//       >
//         <h2>Global cases</h2>
//         <h3>{this.props.datas}</h3>
//       </div>
//     );
//   }
// }

// // const mapStateToProps = (state: StoreState): { datas: Data[] } => {
// //   return { datas: state.datas };
// // };

// export default OthersData;

import React from 'react';
import { Data } from './actions/DataCovid';

const OtherDatas = (props: any) => {
  const { listData } = props;
  return (
    <div
      className="total_cases"
      style={{
        position: 'absolute',
        right: '50px',
        width: '200px',
        height: '120px',
        textAlign: 'center',
      }}
    >
      <h3>Global cases</h3>
      <h1>{listData.reduce((accumulator:number, current:any)=>accumulator+current.cases,0)}</h1>
    </div>
  );
};

export default OtherDatas;
