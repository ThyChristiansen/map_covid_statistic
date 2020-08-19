import {Data,FetchDataAction} from '../actions/DataCovid'
import {ActionTypes} from '../actions/types'

export const DataReducer =(
  state:Data[]=[], 
  action: FetchDataAction
  )=>{
    switch(action.type){
      case ActionTypes.fetchDatas:
        return action.payload;
        default:
          return state;
    }
}