import {combineReducers} from 'redux';
import {DataReducer} from './dataCovidReducer';
// import {DataLocationReducer} from './LocationReducer';

import {Data} from '../actions/DataCovid';
import {ILocation} from '../OthersData';


export interface StoreState{
  datas?: Data[],
  location?: ILocation[],

}

export const reducers = combineReducers<StoreState>({
  datas: DataReducer,
  // location: DataLocationReducer,
})