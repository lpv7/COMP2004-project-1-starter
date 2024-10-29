// 6. CartCard is a presentational component that displays an image of the product, the price, the
// quantity, and the sub-total of the products. It also has the QuantityCounter component, which
// allows users to edit the number of the same product they put in the cart, and a remove item button
// that will remove the item from the cart.

import QuantityCounter from "./QuantityCounter";

export default function CartCard({ image, productName, price, quantity }) {
  return (
    <div className="CartCard">
      <img src={image} alt={productName} />
      <h4>{productName}</h4>
      <p>{price}</p>
      <QuantityCounter /> {/* Probably need to add more to this */}
      {/* subtotal: */}
      <p>
        <b>Total: {(quantity * price).toFixed(2)}</b>
      </p>
      <button>Remove</button>
    </div>
  );
}
