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
         case 'SCORE_UPDATE_MINUS':
            console.log(action.payload);
             return {
            ...state,
            score: (state.score - action.payload)
         };
         case 'SCORE_UPDATE_PLUS':
            console.log(action.payload);
             return {
            ...state,
            score: (state.score + action.payload)
         };
      default: return state;
   }
};
