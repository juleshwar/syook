import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { VOTE } from "../constants/vote";
import { usersActions } from "../store/slices/users";
import { dishesActions } from "../store/slices/dishes";
import VoteBlock, { VOTE_STATE } from "./ui/VoteBlock";

function DashboardPage({ history }) {
  const dishes = useSelector((state) => state.dishes);
  const headerCellClasses = "text-xl font-bold text-center border p-2 w-1/4";
  const rowCellClasses = "text-l text-center border p-2";
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const isLoggedIn = useSelector((state) => state.users.loggedIn);
  const votedDishes = currentUser?.votedDishes;

  function signOut() {
    dispatch(usersActions.logOutUser());
    history.push("/login");
  }

  function onVote(votedDishes, dishId, rank) {
    if (!isLoggedIn) {
      return false;
    }
    if (votedDishes[rank] === dishId) {
      /**
       * if the same dish has already been given the @argument rank, do nothing
       */
      return;
    }

    const alreadyRankedDishes = Object.entries(votedDishes).map(([r, d]) => d);
    if (alreadyRankedDishes.includes(dishId)) {
      /**
       * if the same @argument dishId has been assigned a rank already, remove the rank for that dish
       * Also remove the @argument dishId's mapping in votedDishes i.e clear the votedDishes's rank
       */
      /**
       * @var rankOfDish is finding the rank of the dish with id @argument dishId within @argument votedDishes
       */

      const rankOfDish = +Object.entries(votedDishes).find(
        ([r, d]) => d === dishId
      )[0];
      dispatch(dishesActions.removeRank({ dishId, rank: rankOfDish }));
      dispatch(usersActions.resetVote({ rank: rankOfDish }));
    }
    if (votedDishes[rank]) {
      /**
       * if a dish has already been selected for that @argument rank, remove the rank for that dish
       */

      dispatch(dishesActions.removeRank({ dishId: votedDishes[rank], rank }));
    }
    dispatch(usersActions.voteDish({ dishId, rank }));
    dispatch(dishesActions.setRank({ dishId, rank }));
  }

  function getVoteBlockState(votedDishes, dishId) {
    if (!isLoggedIn) {
      return {};
    }
    return Object.entries(VOTE).reduce((acc, [key, v]) => {
      /**
       * verdict returns SELECTED if the currentUser has voted @param v for @param dishId
       * verdict returns DIMMED if the currentUser has already voted @param v for another dish
       * verdict returns UNSELECTED if the currentUser has NOT voted @param v for any dish
       */
      const verdict =
        votedDishes[v] === dishId
          ? VOTE_STATE.SELECTED
          : votedDishes[v]
          ? VOTE_STATE.DIMMED
          : VOTE_STATE.UNSELECTED;
      acc[v] = verdict;
      return acc;
    }, {});
  }

  return (
    <section className="flex flex-col items-center">
      <nav className="flex w-full h-16 text-lg items-center justify-between bg-red-100 p-4">
        <span>Hi {isLoggedIn ? currentUser.username : ""}</span>
        <a href="#" onClick={signOut} className="underline text-blue-500">
          Sign out
        </a>
      </nav>
      <div className="mt-8 w-full flex flex-col items-center">
        <h3 className="text-2xl">Dashboard</h3>
        <table className="mt-8 w-3/5 border border-gray-400 collapse">
          <thead>
            <tr>
              <td className={headerCellClasses}>Image</td>
              <td className={headerCellClasses}>Dish</td>
              <td className={headerCellClasses}>Points</td>
              <td className={headerCellClasses}>Vote Here</td>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => (
              <tr key={dish.id}>
                <td className={rowCellClasses}>
                  <img className="w-28 h-28 m-auto" src={dish.image} />
                </td>
                <td className={rowCellClasses}>{dish.dishName}</td>
                <td className={rowCellClasses}>{dish.points}</td>
                <td className={rowCellClasses}>
                  <VoteBlock
                    state={getVoteBlockState(votedDishes, dish.id)}
                    onClickHandler={(rank) =>
                      onVote(votedDishes, dish.id, rank)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default withRouter(DashboardPage);
