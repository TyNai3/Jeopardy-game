import Action from './types/Action';
import { State } from './types/UserState';

export const init: State = {
   user: {}
};

export const userReducer = (
   state: State = init,
   action: Action): State => {
   switch (action.type) {
      case 'REGISTRATION':
         return {
            ...state,
            user: action.payload.user
         };
      case 'LOGOUT':
         return {
            ...state,
            user: {}
         };
      default: return state;
   }
};
