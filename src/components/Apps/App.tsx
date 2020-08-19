import React from 'react';
import Map from '../Map'
import{connect} from 'react-redux'
import {Data, fetchDatas} from '../actions/DataCovid';
import {StoreState} from '../reducers/index'

interface AppProps{
  datas: Data[];
  fetchDatas():any
}

class _App extends React.Component<AppProps>{

componentDidMount(){
  this.props.fetchDatas();
}

  render(){
    console.log(this.props.datas);
    return (
      <div> 
        <Map />
        

      </div>
    )
    
  }
}

const mapStateToProps=(state:StoreState):{datas:Data[]}=>{
  return {datas:state.datas}
}
export const App= connect(
  mapStateToProps,
  { fetchDatas }
)(_App);

