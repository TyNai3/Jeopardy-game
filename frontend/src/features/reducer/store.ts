import { createStore, combineReducers } from 'redux';
import { questionsReducer } from './questionReducer';
import {userReducer} from '../Rega/userReducer';

const store = createStore(
  combineReducers({
    questionsState: questionsReducer,
     userState: userReducer
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
