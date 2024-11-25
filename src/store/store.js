import { combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { progressReducer } from "../reducers/progressReducer";
import { themeReducer } from "../reducers/themeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  progress: progressReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
