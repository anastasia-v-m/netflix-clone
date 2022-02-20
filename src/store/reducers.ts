/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export interface IActions {
  type: string;
  value: string;
  isDone: boolean;
}

export interface IStoreState {
  value?: string;
  isDone?: boolean;
}

const isDone = sessionStorage.getItem('user') !== null;
const storeValue = isDone ? 'Выйти' : 'Войти';
const INITIAL_STATE: IStoreState = { value: storeValue, isDone };

// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state = INITIAL_STATE, action: IActions,): IStoreState {
  switch (action.type) {
    case 'HAS_LOGED_IN':
      return { value: action.value, isDone: true };
    case 'HAS_LOGED_OUT':
      return { value: action.value, isDone: false };

    default:
      return state;
  }
}

export default reducer;
