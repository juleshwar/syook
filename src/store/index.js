import { combineReducers, createStore } from "@reduxjs/toolkit";
import currentUserSlice from "./slices/currentUser";

export default createStore(
  combineReducers({
    currentUser: currentUserSlice,
  })
);
