import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { usersActions } from "../store/slices/users";

function DashboardPage({ history }) {
  const dishes = useSelector((state) => state.dishes);
  const headerCellClasses = "text-xl font-bold text-center border p-2 w-1/4";
  const rowCellClasses = "text-l text-center border p-2";
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const isLoggedIn = useSelector((state) => state.users.loggedIn);

  function signOut() {
    dispatch(usersActions.logOutUser());
    history.push("/login");
  };

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default withRouter(DashboardPage);
