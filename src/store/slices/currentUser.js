import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    loggedIn: false,
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
  },
});

export default currentUserSlice.reducer;

const actions = currentUserSlice.actions;
export { actions };
