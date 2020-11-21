import {combineReducers} from 'redux';
import {DataReducer} from './dataCovidReducer';
// import {DataLocationReducer} from './LocationReducer';

import {Data} from '../components/actions/DataCovid';
import {ILocation} from '../components/OthersData';


export interface StoreState{
  datas?: Data[],
  location?: ILocation[],

}

export const reducers = combineReducers<StoreState>({
  datas: DataReducer,
  // location: DataLocationReducer,
})