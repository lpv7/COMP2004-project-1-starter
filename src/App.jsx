//import the main CSS file, which be applied to the Component Tree;
//the main logical component, Groceries App Container and the "top
// of the tree"; and our data array of objects, products.

import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import products from "./data/products";

//Send this data to GroceriesAppContainer. This file could be re-written
//as a component and technically included in that folder, right?
// export default function App(){ return...} Interesting!

function App() {
  return (
    <>
      <GroceriesAppContainer products={products} />
    </>
  );
}

export default App;
