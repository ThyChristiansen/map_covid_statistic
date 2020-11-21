import { Data, FetchDataAction } from '../components/actions/DataCovid';

import { ActionTypes } from '../components/actions/types';

export const DataReducer = (state: Data[] = [], action: FetchDataAction) => {
  switch (action.type) {
    case ActionTypes.fetchDatas:
      return action.payload;
    default:
      return state;
  }
};

