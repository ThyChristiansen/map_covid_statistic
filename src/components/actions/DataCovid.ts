import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Data {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    lat: number;
    lng: number;
  };
}

export interface FetchDataAction {
  type: ActionTypes.fetchDatas;
  payload: Data[];
}

export const fetchDatas = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Data[]>(
      'https://corona.lmao.ninja/v2/countries'
    );
    dispatch<FetchDataAction>({
      type: ActionTypes.fetchDatas,
      payload: response.data,
    });
  };
};
