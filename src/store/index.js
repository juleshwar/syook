import { combineReducers, createStore } from "@reduxjs/toolkit";
import currentUserSlice from "./slices/currentUser";
import dishesSlice from "./slices/dishes";

export default createStore(
  combineReducers({
    currentUser: currentUserSlice,
    dishes: dishesSlice,
  })
);
