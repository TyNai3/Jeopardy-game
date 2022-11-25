import { Response, User } from './UserState';

type Action =
| { type: 'REGISTRATION', payload: Response }
| { type: 'LOGOUT' }
| { type: 'SCORE_UPDATE_MINUS', payload:number }
| { type: 'SCORE_UPDATE_PLUS', payload:number };

export default Action;
