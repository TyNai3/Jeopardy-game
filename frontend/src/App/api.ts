import Question from '../features/QuestionList/types/Question';
import Topic from '../features/QuestionList/types/Topic';
import { Response, UserReg } from '../features/Rega/types/UserState';
import { UserLogin } from '../features/FormLogo/types/UserLogin';

export const loadQuestions = async (): Promise<Question[]> => {
  const res = await (fetch('http://localhost:4000/cards/questions'));
  return res.json();
};

export const loadTopics = async (): Promise<Topic[]> => {
  const res = await (fetch('http://localhost:4000/cards/topics'));
  return res.json();
};

export const registration = async (user: UserReg): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/registration', {
  method: 'post',
   headers: { 'Content-type': 'application/json' },
   credentials: 'include',
   body: JSON.stringify(user),
}));
return res.json();
};

export const logout = async (): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/logout', {
    credentials: 'include',
  }));
  return res.json();
};

export const login = async (user: UserLogin):Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/login', {
  method: 'post',
  headers: { 'Content-type': 'application/json' },
   credentials: 'include',
   body: JSON.stringify(user),
  }));
  return res.json();
};
