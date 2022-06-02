import React from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AVAILABLE_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Cesar Salat",
    description: "So fresh!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Tasty, classic, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className="meals">
      <Card>
        <ul>
          {AVAILABLE_MEALS.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
