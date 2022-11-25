import { Response } from './UserState';

type Action =
| { type: 'REGISTRATION', payload: Response }
| { type: 'LOGOUT' }
| { type: 'LOGIN', payload: Response };

export default Action;
