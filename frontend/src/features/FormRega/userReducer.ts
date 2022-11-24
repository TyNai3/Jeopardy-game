import Action from '../FormRega/types/Action'
import {Response, User} from '../FormRega/types/UserState'

export const init = {
   res: {}
}

export const userReducer = (
   state: Response,
   action: Action) : Response => {
   switch (action.type) {
      case "REGISTRATION":
         return {
            ...state,
            user: action.payload.user
         }
         default: return state
   }
}