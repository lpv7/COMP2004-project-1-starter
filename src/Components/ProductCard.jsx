// 4. ProductCard is a presentation component that displays a single card with all the required elements.
// It also contains a QuantityCounter component if the user wants to add several of the same products
// to the cart. The component has an “Add to Cart” button; when the user clicks on it, the product and
// its chosen quantities should be added to the cart. The CartCart should be updated with the added
// amount if the product exists. For example, if the Coca-Cola product has two quantities in the cart
// and you added another Coca-Cola product with three quantities, the cart should update to five on
// the Coca-Cola CartCard. If the user tries to add a product with zero items, an alert should be
// displayed, asking the user to add a quantity before adding it to the cart.

//imports; ProductCard and Cart Card both use QuantityCounter. Also ended up adding 2
//states in this component. Will fix this later on.

import QuantityCounter from "./QuantityCounter";

import { useState } from "react";

//ProductCard: as describved, renders a card for each store item. The
//Add To Cart proved to be very tricky, and in my current delerium, I went
//with the option of using an additional state to prevent the items added
//to the cart from being directly tied to their values in the store (
//previously, increasing a quantity in the cart would instantly
//and automatically increase its quantity in the store to match and vice-
//versa). Again, something I'll need to fix later on.

export default function ProductCard({
  productName,
  image,
  brand,
  price,
  id,
  handleAddToCart,
  cartList,
  listing,
}) {
  const [localCount, setLocalCount] = useState(0);

  const handleReduceLocalCount = () => {
    if (localCount > 0) {
      setLocalCount(localCount - 1);
    }
  };

  const handleAddLocalCount = () => {
    setLocalCount(localCount + 1);
  };

  return (
    <div>
      <h2>{productName}</h2>
      <img src={image} alt={productName} />
      <h3>{brand}</h3>
      <QuantityCounter
        productCount={localCount}
        handleReduceCount={handleReduceLocalCount}
        handleAddCount={handleAddLocalCount}
        id={id}
        mode="product"
      />
      <p>{price}</p>
      <button onClick={() => handleAddToCart(listing, localCount)}>
        Add to Cart
      </button>
    </div>
  );
}
