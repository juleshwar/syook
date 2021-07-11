import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    loggedIn: false,
    votedDishes: {},
  },
  reducers: {
    logInUser: (state, { payload }) => {
      state.user = payload;
      state.loggedIn = true;
    },
    logOutUser: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
    voteDish: (state, { payload }) => {
      const { rank, dishId } = payload;
      state.votedDishes[rank] = dishId;
    },
  },
});

export default currentUserSlice.reducer;

const actions = currentUserSlice.actions;
export { actions };
