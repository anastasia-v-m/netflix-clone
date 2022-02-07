import { combineReducers } from 'redux';

export interface IActions {
  type: string,
  value: string,
}

function reducer(state = {}, action: IActions) {
  switch(action.type) {
      case 'ACTION': return { value: action.value };
      case 'ACTION1': return { value: action.value };
      
      default: return state;
  }
}

export default reducer;
