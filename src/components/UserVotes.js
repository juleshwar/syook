import React from "react";
import { useSelector } from "react-redux";
import { VOTE_MEDAL_MAP } from "../constants/vote";

function UserVotes({ votedDishes }) {
  const dishes = useSelector((state) => state.dishes);
  const dishIds = Object.entries(votedDishes).map(([r, d]) => d);
  const dishObjects = [];

  if (!dishIds.length) {
    return <span>No dishes selected yet!</span>;
  }

  let foundDishes = 0;
  for (const dish of dishes) {
    const indexOfDishPresentInDishIds = dishIds.findIndex(
      (dishId) => dishId === dish.id
    );
    if (indexOfDishPresentInDishIds > -1) {
      dishObjects[indexOfDishPresentInDishIds] = dish;
      foundDishes++;
    }
    if (foundDishes === dishIds.length) break;
  }

  const dishMap = Object.entries(votedDishes).map(([rank, d], index) => ({
    rank,
    dish: dishObjects[index],
  }));

  return (
    <div className={`flex items-start flex-col text-lg`}>
      <span className="self-center text-xl">Your Votes</span>
      {dishMap.map(({ rank, dish }) => (
        <div className="my-1" key={rank}>
          {VOTE_MEDAL_MAP[rank]} {dish.dishName}
        </div>
      ))}
    </div>
  );
}

export default UserVotes;
