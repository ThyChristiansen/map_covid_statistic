
import { ILocation, FetchLocationAction } from '../components/OthersData';

import { ActionTypes } from '../components/actions/types';

export const DataLocationReducer = (state: ILocation[] = [], action: FetchLocationAction) => {
  switch (action.type) {
    case ActionTypes.fetchLocation:
      return action.payload;
    default:
      return state;
  }
};
