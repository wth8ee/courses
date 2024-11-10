import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer
})