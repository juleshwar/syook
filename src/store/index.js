import { combineReducers, createStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users";
import dishesSlice from "./slices/dishes";

export default createStore(
  combineReducers({
    users: usersSlice,
    dishes: dishesSlice,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
