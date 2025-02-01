import "./App.css";
import Pizza from "./components/Pizza";

function App() {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 8 && currentTime <= 22;
  return (
    <>
      <Pizza />

      <h1 className="footer">
        {isOpen
          ? "We're currently Open!"
          : "Sorry We're close and open again tomorrow at 8:00 AM"}
      </h1>
      <button className="btn">Order Now</button>
    </>
  );
}

export default App;
