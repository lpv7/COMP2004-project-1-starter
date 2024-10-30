import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import products from "./data/products";

function App() {
  return (
    <>
      <GroceriesAppContainer products={products} />
    </>
  );
}

export default App;
