import { createStore, combineReducers } from 'redux';
import { questionsReducer } from './questionReducer';

const store = createStore(
  combineReducers({
    questionsState: questionsReducer,
    topicsState:questionsReducer

  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
