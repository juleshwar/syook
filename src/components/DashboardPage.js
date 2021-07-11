import React from "react";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const dishes = useSelector((state) => state.dishes);
  const headerCellClasses = "text-xl font-bold text-center border p-2 w-1/4";
  const rowCellClasses = "text-l text-center border p-2";
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-xl">Dashboard</h3>
      <table className="mt-4 w-3/5 border border-gray-400 collapse">
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
    </section>
  );
}
