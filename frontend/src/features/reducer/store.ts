import { createStore, combineReducers } from 'redux';
import userReducer from '../FormRega/FormRega'

const store = createStore(
  combineReducers({
    userState: userReducer
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;