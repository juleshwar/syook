import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DISHES from "../../constants/dishes";

const rankToPointsMap = new Map([
  [1, 30],
  [2, 20],
  [3, 10],
]);

const findDish = (dishes, dishId) => {
  return dishes.find((dish) => dish.id === dishId);
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState: DISHES.map((d) => {
    d.points = 0;
    return d;
  }),
  reducers: {
    setRank: (state, dishId, rank) => {
      const dish = findDish(state, dishId);
      if (dish) {
        dish.points += rankToPointsMap.get(rank);
      }
      const dispatch = useDispatch();
      dispatch(dishesActions.sortDishesInDescendingOrder());
    },
    removeRank: (state, dishId, rank) => {
      const dish = findDish(state, dishId);
      if (dish) {
        dish.points -= rankToPointsMap.get(rank);
      }
      const dispatch = useDispatch();
      dispatch(dishesActions.sortDishesInDescendingOrder());
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
