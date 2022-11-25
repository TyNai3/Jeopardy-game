import Action from './types/Action';
import { State } from './types/UserState';

export const init: State = {
   user: {},
   score: 0
};

export const userReducer = (
   state: State = init,
   action: Action): State => {
   switch (action.type) {
      case 'REGISTRATION':
         return {
            ...state,
            user: action.payload.user!
         };
      case 'LOGOUT':
         return {
            ...state,
            user: {}
         };
         case 'LOGIN':
            return {
               ...state,
               user: action.payload.user!
            };
      default: return state;
   }
};
