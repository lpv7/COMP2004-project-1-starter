/* 1. GroceriesAppContainer is the primary logical component. This component will handle all the states
and functions needed to get this app working. This component will import the data from products.js
and pass it to the inventory component. */
import { useState } from "react";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ products }) {
  const [productCount, setProductCount] = useState(
    products.map((prod) => ({ id: prod.id, count: 0 }))
  );

  const [cartList, setCartList] = useState([]);

  const handleReduceCount = (id, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === id && product.quantity > 1) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
    } else if (mode === "product") {
      const newProductCount = productCount.map((product) => {
        if (product.id === id && product.quantity > 0) {
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
        />
        <CartContainer cartIsEmpty={true} />
      </div>
    </div>
  );
}
