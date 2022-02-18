/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export interface IActions {
  type: string;
  value: string;
}

const INITIAL_STATE = {};

// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer(state: any = INITIAL_STATE, action: IActions,) {
  switch (action.type) {
    case 'ACTION':
      return { value: action.value };
    case 'ACTION1':
      return { value: action.value };

    default:
      return state;
  }
}

export default reducer;
