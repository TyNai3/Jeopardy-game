import Action from './types/Action';
import State from './types/State';

export const init = {
  : []
};
// reducer.ts
export const adReducer = (
  state: State = init,
  action: Action
 ): State => {
  switch (action.type) {
   case 'INIT_AD':
    return {
      ...state,
      ad: action.payload
    };
   case 'ADD_AD':
    return {
     ...state,
     ad: [...state.ad, action.payload]
    };
   case 'DEL_AD':
    return {
      ...state,
      ad: state.ad.filter((el) => el.id !== action.payload)
    };
    default: return state;
  }
 };