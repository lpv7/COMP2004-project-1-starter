// 5. CartContainer is a presentation component. This component will render out the list of items chosen
// by the user. If the cart is empty, the component will show “No items in the cart.” Otherwise, it will
// show the number of items in the cart, and each item will be represented as a CartCard component.
// There are also two buttons at the end of the list:
// a. Empty the cart button. When clicked, the cart empties.
// b. Buy button that shows the total price that has no functionality.

import CartCard from "./CartCard";

export default function CartContainer({
  products,
  cartList,
  handleAddCount,
  handleReduceCount,
  handleEmptyCart,
}) {
  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <h2>
            <b>Cart Items: {cartList.length}</b>
          </h2>
          {products.map((product) => (
            <CartCard
              key={product.id}
              {...product}
              handleReduceCount={handleReduceCount}
              handleAddCount={handleAddCount}
            />
          ))}
          <button onClick={() => handleEmptyCart}>Empty Cart</button>
          <button>Checkout: total</button>
        </>
      ) : (
        <>
          <h1>
            <b>Cart Items: 0</b>
          </h1>
          <h2>No items in cart</h2>
        </>
      )}
    </div>
  );
}

//   {return(
//     <div>
//     <h1>
//       <b>Cart Items: {Array.length}</b>
//     </h1>
//     products.map((product) => (
//       <CartCard key={product.id} {...product} />
//     ))}
//   </div>
// )}
// :return(//can we have multiple return statements? Ternary seems to want to come before return
//   <div className="CartContainer">
//     <h1>
//       <b>Cart Items: 0</b>
//     </h1>
//     <h2>No items in cart</h2>) ))
