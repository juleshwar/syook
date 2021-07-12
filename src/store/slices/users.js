import { createSlice } from "@reduxjs/toolkit";
import USERS from "../../constants/users";

const updateUserVotedDishesState = ({ allUsers, currentUser }) => {
  for (let i = 0; i < allUsers.length; i++) {
    let user = allUsers[i];
    if (user.id === currentUser.id) {
      user.votedDishes = currentUser.votedDishes;
      break;
    }
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: USERS.map((u) => {
      u.votedDishes = {};
      return u;
    }),
    currentUser: null,
    loggedIn: false,
  },
  reducers: {
    logInUser: (state, { payload }) => {
      const { username, password } = payload;
      const user = state.allUsers.find((u) => u.username === username);
      state.currentUser = user;
      state.loggedIn = true;
    },
    logOutUser: (state) => {
      updateUserVotedDishesState(state);
      state.currentUser = null;
      state.loggedIn = false;
    },
    voteDish: (state, { payload }) => {
      const { rank, dishId } = payload;
      state.currentUser.votedDishes[rank] = dishId;
    },
    resetVote: (state, { payload }) => {
      const { rank } = payload;
      delete state.currentUser.votedDishes[rank];
    },
  },
});

export default usersSlice.reducer;

const usersActions = usersSlice.actions;
export { usersActions };
