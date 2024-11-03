// 6. CartCard is a presentational component that displays an image of the product, the price, the
// quantity, and the sub-total of the products. It also has the QuantityCounter component, which
// allows users to edit the number of the same product they put in the cart, and a remove item button
// that will remove the item from the cart.

import QuantityCounter from "./QuantityCounter";

//CartCard: Nothing special here, similar story to ProductCard; note however, that we can use our
//initial handlers as originally intended without wussing out and succumbing to creating local
//variables. Also, poor neglected handleRemoveFromCart is finally used. Yay!

export default function CartCard({
  image,
  productName,
  price,
  qty,
  handleReduceCount,
  handleAddCount,
  handleRemoveFromCart,
  id,
}) {
  return (
    <div className="CartCard">
      <img src={image} alt={productName} />
      <h4>{productName}</h4>
      <p>{price}</p>
      <QuantityCounter
        productCount={qty}
        handleReduceCount={() => handleReduceCount(id, "cart")}
        handleAddCount={() => handleAddCount(id, "cart")}
        id={id}
        mode="cart"
      />
      <p>
        <b>Total: ${(qty * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
      </p>
      <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
    </div>
  );
}
