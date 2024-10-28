import "./App.css";
import QuantityCounter from "./Components/QuantityCounter";
import CartCard from "./Components/CartCard";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import products from "./data/products";

function App() {
  return (
    <>
      {/* Add your code here! */}
      <GroceriesAppContainer products={products} />
    </>
  );
}

export default App;
