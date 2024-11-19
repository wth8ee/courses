import { combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { progressReducer } from "../reducers/progressReducer";

const rootReducer = combineReducers({
  user: userReducer,
  progress: progressReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
