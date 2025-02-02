import { useEffect, useState } from "react";
import "../index.css";
import focaccia from "../pizzas/focaccia.jpg";
import funghi from "../pizzas/funghi.jpg";
import margherita from "../pizzas/margherita.jpg";
import prosciutto from "../pizzas/prosciutto.jpg";
import salamino from "../pizzas/salamino.jpg";
import spinaci from "../pizzas/spinaci.jpg";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];
const Pizza = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const openHour = 8;
  const closeHour = 21;
  const isOpen = hours >= openHour && hours < closeHour;

  return (
    <div className="container">
      <div className="header">
        <h1>Fast React Pizza Co.</h1>
        <div className="menu">
          <h2>Our Menu</h2>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
        </div>

        <div className="pizzas">
          {pizzaData.map((pizza) => {
            return (
              <div
                className={`pizza ${pizza.soldOut ? "pizza sold-out" : ""}`}
                key={pizza.name}
              >
                <img
                  className="pizza__image"
                  src={pizza.photoName}
                  alt={pizza.name}
                />
                <div className="pizza__content">
                  <h3 className="pizza__title">{pizza.name}</h3>
                  <p className="pizza__ingredients">{pizza.ingredients}</p>
                  <span className="pizza__price">
                    {pizza.soldOut ? "SOLD OUT" : `Price: ${pizza.price}`}
                  </span>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>

      <div className="footer">
        <h1 className="footer__time">
          <div>
            {hours}:{minutes < 10 ? "0" : ""}
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </div>
          <div>
            {isOpen
              ? "We're currently Open!"
              : "We're currently Closed! Come back tomorrow between 8 AM and 9 PM!"}
          </div>
        </h1>
      </div>
      <button className="btn">Order Now</button>
    </div>
  );
};
export default Pizza;
