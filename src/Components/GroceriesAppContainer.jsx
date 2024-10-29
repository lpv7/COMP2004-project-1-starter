/* 1. GroceriesAppContainer is the primary logical component. This component will handle all the states
and functions needed to get this app working. This component will import the data from products.js
and pass it to the inventory component. */
import { useState } from "react";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ products }) {
  //states (1 for Products, 1 for Cart)

  const [productCount, setProductCount] = useState(
    products.map((prod) => ({ id: prod.id, count: 0 }))
  );

  const [cartList, setCartList] = useState([]); //cartItems = cartList; setCartItems = setCartList; cartItem = cartListing; Item = Listing

  //handlers

  //Add To Cart: checks if the quantity (count = qty) being added is 1 or greater, otherwise yells at the user! Then checks if item is
  //already in cart using .some. .some is essentially a search algorithm; if id is found, stops checking. Yay! If item is already in cart,
  //adds new quantity to it. If not, adds item to cart (array) with desired quantity
  const handleAddToCart = (listing, qty) => {
    if (qty >= 1) {
      const updatedCartList = cartList.some(
        (cartListing) => cartListing.id === listing.id
      )
        ? cartList.map((cartListing) =>
            cartListing.id === listing.id
              ? { ...cartListing, amount: cartListing.amount + qty }
              : cartListing
          )
        : [...cartList, { ...listing, amount: qty }];
      setCartList(updatedCartList);
    } else {
      alert("Please select a quantity");
    }
  };

  // asks the user to confirm empty cart action, if yes, sets cart item array
  // to empty.
  const handleEmptyCart = () => {
    if (confirm("Please confirm you wish to empty the cart.")) {
      setCartList([]);
    }
  };

  const handleReduceCount = (id, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === id && product.count > 1) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
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

  const handleAddCount = (id, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
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
  // //handler to reduce count in quantity counter. setProductCount from State above
  // const handleReduceCount = (id) => {
  //   setProductCount((prevProductCount) => {
  //     return prevProductCount.count > 0
  //       ? (prevProductCount.map(prod) => {

  //       })
  //       // ? {
  //       //     ...prevProductCount,
  //       //     count: prevProductCount.count - 1,
  //       //   } //need prevQuantity
  //       : { ...prevProductCount, count: 0 };
  //   });
  // };

  // const handleAddCount = (id) => {
  //   setProductCount((prevProductCount) => {
  //     return prevProductCount.count >= 1
  //       ? { ...prevCount, count: prevProductCount.count + 1 }
  //       : { ...prevProductCount, count: 1 };
  //   });
  // };

  return (
    <div>
      <NavBar />
      <div className="GroceriesApp-Container">
        <ProductsContainer
          products={products}
          productCount={productCount}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleAddToCart={handleAddToCart}
        />
        <CartContainer
          products={products}
          cartList={cartList}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}
