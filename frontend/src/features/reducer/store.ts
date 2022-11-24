import { createStore, combineReducers } from 'redux';
import { questionsReducer } from './questionReducer';
import userReducer from '../FormRega/FormRega'

const store = createStore(
  combineReducers({
    questionsState: questionsReducer,
    topicsState:questionsReducer,
     userState: userReducer
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
