import {combineReducers} from 'redux';
import {DataReducer} from './dataCovidReducer';
import {Data} from '../actions/DataCovid';

export interface StoreState{
  datas: Data[]
}

export const reducers = combineReducers<StoreState>({
  datas: DataReducer
})