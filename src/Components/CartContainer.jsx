// 5. CartContainer is a presentation component. This component will render out the list of items chosen
// by the user. If the cart is empty, the component will show “No items in the cart.” Otherwise, it will
// show the number of items in the cart, and each item will be represented as a CartCard component.
// There are also two buttons at the end of the list:
// a. Empty the cart button. When clicked, the cart empties.
// b. Buy button that shows the total price that has no functionality.

import CartCard from "./CartCard";

//CartContainer: Renders all Cart Cards if items are added to the cart. Note the use of the reduce function (Week 1 review!)
//to get the running total for checkout. I know parsefloat isn't required, but it reminds me of C++ and brings me some small
//modicum of joy in the turgid landscape that is javaScript, so I decided not to remove it. Notice that like the NavBar, this checks the length of the
//cartList array. handleEmptyCart is also used!

export default function CartContainer({
  products,
  productCount,
  cartList,
  handleAddCount,
  handleReduceCount,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  // Calculate the total price directly within the component
  const totalPrice = cartList
    .reduce((sum, product) => {
      return sum + product.qty * parseFloat(product.price.replace("$", ""));
    }, 0)
    .toFixed(2);

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <h2>
            <b>Cart Items: {cartList.length}</b>
          </h2>
          {cartList.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              productCount={productCount}
              handleReduceCount={handleReduceCount}
              handleAddCount={handleAddCount}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
          <button onClick={handleEmptyCart}>Empty Cart</button>
          <button>Checkout: ${totalPrice}</button> {/* Display total price */}
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
