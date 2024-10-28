// 4. ProductCard is a presentation component that displays a single card with all the required elements.
// It also contains a QuantityCounter component if the user wants to add several of the same products
// to the cart. The component has an “Add to Cart” button; when the user clicks on it, the product and
// its chosen quantities should be added to the cart. The CartCart should be updated with the added
// amount if the product exists. For example, if the Coca-Cola product has two quantities in the cart
// and you added another Coca-Cola product with three quantities, the cart should update to five on
// the Coca-Cola CartCard. If the user tries to add a product with zero items, an alert should be
// displayed, asking the user to add a quantity before adding it to the cart.

import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  productName,
  image,
  brand,
  price,
  id,
  productCount,
  handleReduceCount,
  handleAddCount,
}) {
  //whole thing freaked out when I added angle brackets around products in parameter list. Needs to be there, not in brackets
  return (
    <div>
      <h2>{productName}</h2>
      <img src={image} alt={productName} />
      <h3>{brand}</h3>
      <QuantityCounter
        productCount={productCount}
        handleReduceCount={handleReduceCount}
        handleAddCount={handleAddCount}
        id={id}
        mode="product"
      />
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
