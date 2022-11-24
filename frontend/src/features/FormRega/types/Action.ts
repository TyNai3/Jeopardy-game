import { Response, User } from "./UserState";

type Action = 
| {type: 'REGISTRATION', payload: Response}
| {type: 'LOGOUT'}

export default Action