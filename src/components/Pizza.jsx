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
                    {pizza.soldOut ? "SOLD OUT" : pizza.price}
                  </span>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};
export default Pizza;
