
import { ILocation, FetchLocationAction } from '../OthersData';

import { ActionTypes } from '../actions/types';

export const DataLocationReducer = (state: ILocation[] = [], action: FetchLocationAction) => {
  switch (action.type) {
    case ActionTypes.fetchLocation:
      return action.payload;
    default:
      return state;
  }
};
