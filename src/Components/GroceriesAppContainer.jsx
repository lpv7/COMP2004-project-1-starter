/* 1. GroceriesAppContainer is the primary logical component. This component will handle all the states
and functions needed to get this app working. This component will import the data from products.js
and pass it to the inventory component. */

//Imports: useState of course; how else should we "react" to changes in the app! (booo!)
//GroceriesAppContainer will pass all of the fun stuff below to the top components of
//each branch: ProductsContainer, NavBar and CartContainer.

import { useState } from "react";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ products }) {
  //States. Two, one for the cart and one for the products.

  const [productCount, setProductCount] = useState(
    products.map((prod) => ({ id: prod.id, count: 0 }))
  );

  const [cartList, setCartList] = useState([]);

  //Handlers. Five total: handleAddToCart, handleRemoveFromCart,
  // handleEmptyCart, handleReduceCount and handleAddCount.

  //handleAddToCart: found in each productCard, this is implemented
  //within a button reading Add to Cart. Upon click, handleAddToCart will
  //check if the quantity being added is equal to or greater than 1; if
  //not, a popup (who doesn't love popups!) will scream down and demand
  //the user add a quantity, at once! (High pressure sales tactics are TIGHT)
  //If the quantity >= 1, the id of the item being added is checked against
  //current contents using the lovely find function. If the id is found, the
  //current quantity in the cart is updated and the incoming quantity is added.
  //If this operation fails (say the incoming quantity somehow passed the 1st
  //check but cannot be added to the existing quantity), the quantity will remain.
  //Otherwise, a new cart card is added conataining the relevant info about
  //the incoming product and the quantity selected.

  const handleAddToCart = (listing, qty) => {
    if (qty >= 1) {
      const updatedCartList = cartList.find(
        (cartListing) => cartListing.id === listing.id
      )
        ? cartList.map((cartListing) =>
            cartListing.id === listing.id
              ? { ...cartListing, qty: cartListing.qty + qty }
              : cartListing
          )
        : [...cartList, { ...listing, qty }];
      setCartList(updatedCartList);
    } else {
      alert("Please select a quantity");
    }
  };

  //handleRemoveFromCart: A much simpler one, makes use of the handy-dandy
  //filter function you reminded us of in the JS review (week 1!) to remove an
  //item based on its id. Tied to a button reading Remove in each cart card,
  //removing that item and only that item. I opted not to display the additional
  //popup for this (in the "bonus" section) as I felt it would slowly users down
  //and become a nuissance. Note the similar functionality in handleReduceCount
  //if a cart items quantity is reduced to 0; probably could have called this
  //handle there. Live and learn.

  const handleRemoveFromCart = (id) => {
    const updatedCartList = cartList.filter(
      (cartListing) => cartListing.id !== id
    );
    setCartList(updatedCartList);
  };

  //handleEmptyCart: sets cart contents to empty (empty array). Easy-peasy.
  //One of the few times I feel a popup is useful, as a warning to the user
  //that they are about to empty their carefully-constructed cart.

  const handleEmptyCart = () => {
    if (confirm("Please confirm you wish to empty the cart.")) {
      setCartList([]);
    }
  };

  //Two fun ones incoming; because these need to work for both ProductCard and CartCard, things
  //became more complicated

  //handleReduceCount: checks if the item is in the store or the cart. Will not drop below 0 in the store,
  //and if the quantity drops below 0 in the cart, it is removed entirely. Note the use of spread, filter
  //and map to ensure this functions as expected

  const handleReduceCount = (id, mode) => {
    if (mode === "cart") {
      const newCartList = cartList
        .map((product) => {
          if (product.id === id) {
            if (product.qty > 1) {
              return { ...product, qty: product.qty - 1 };
            }
            return null; // Mark item for removal if quantity reaches 0
          }
          return product;
        })
        .filter((product) => product !== null); // Remove items marked as null
      setCartList(newCartList);
    } else if (mode === "product") {
      const newProductCount = productCount.map((product) => {
        if (product.id === id && product.count > 0) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      setProductCount(newProductCount);
    }
  };

  //handleAddToCart: Same deal as above, but adds instead of reduces; as such,
  //does not include a lower limit or extra functionality if a limit is
  //reached. Also obviously no upper limit.

  const handleAddCount = (id, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      });
      setCartList(newCartList);
    } else if (mode === "product") {
      const newProductCount = productCount.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      setProductCount(newProductCount);
    }
  };

  //Finally, the actual function, where we pass the required (mostly) data and handles to
  //our top 3 components; note that all three receive the cartList. Also note
  //that because items are added to the cart from the ProductCard component (the
  //next child component in the chain after ProductsContainer), we send
  //handleAddToCart down the Products branch. Similarly, because both the Products
  //and Cart branches "meet again" at the bottom component, Quantity Counter
  //(and both use it, albeit in slightly modified ways), we send the relevant
  //handles for QuantityCounter, handleAddCount and handleReduceCount, down both
  //branches as well.

  return (
    <div>
      <NavBar cartList={cartList} /> {/* Pass cartList to NavBar */}
      <div className="GroceriesApp-Container">
        <ProductsContainer
          products={products}
          cartList={cartList}
          productCount={productCount}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleAddToCart={handleAddToCart}
        />
        <CartContainer
          products={products}
          productCount={productCount}
          cartList={cartList}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}
