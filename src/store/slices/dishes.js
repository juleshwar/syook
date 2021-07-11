import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DISHES from "../../constants/dishes";
import { VOTE } from "../../constants/vote";

const rankToPointsMap = new Map([
  [[VOTE.GOLD], 30],
  [[VOTE.SILVER], 20],
  [[VOTE.BRONZE], 10],
]);

const findDish = (dishes, dishId) => {
  return dishes.find((dish) => dish.id === dishId);
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState: DISHES.map((d) => {
    d.points = 0;
    d.rank = 1;
    return d;
  }),
  reducers: {
    setRank: (state, { payload }) => {
      const { dishId, rank } = payload;
      const dish = findDish(state, dishId);
      if (dish) {
        dish.points += rankToPointsMap.get(rank) || 0;
      }
    },
    removeRank: (state, { payload }) => {
      const { dishId, rank } = payload;
      const dish = findDish(state, dishId);
      if (dish) {
        dish.points -= rankToPointsMap.get(rank) || 0;
      }
    },
    sortDishesInDescendingOrder: (state) => {
      state.sort((dishA, dishB) => {
        if (dishA.points > dishB.points) {
          return -1;
        }
        if (dishA.points < dishB.points) {
          return 1;
        }
        if (dishA.points === dishB.points) {
          return 0;
        }
      });
    },
  },
});

export default dishesSlice.reducer;

const dishesActions = dishesSlice.actions;
export { dishesActions };
