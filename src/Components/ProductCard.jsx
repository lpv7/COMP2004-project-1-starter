// 4. ProductCard is a presentation component that displays a single card with all the required elements.
// It also contains a QuantityCounter component if the user wants to add several of the same products
// to the cart. The component has an “Add to Cart” button; when the user clicks on it, the product and
// its chosen quantities should be added to the cart. The CartCart should be updated with the added
// amount if the product exists. For example, if the Coca-Cola product has two quantities in the cart
// and you added another Coca-Cola product with three quantities, the cart should update to five on
// the Coca-Cola CartCard. If the user tries to add a product with zero items, an alert should be
// displayed, asking the user to add a quantity before adding it to the cart.

import QuantityCounter from "./QuantityCounter";

import { useState } from "react";

export default function ProductCard({
  productName,
  image,
  brand,
  price,
  id,
  handleAddToCart,
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

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
// }) {
//   const productData = productCount.find((p) => p.id === id);
//   const count = productData ? productData.count : 0;

//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={count}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button onClick={() => handleAddToCart(listing, count)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
// }) {
//   // Safely extract the count for the product. Use optional chaining to avoid errors if the product is not found.
//   const count = productCount.find((p) => p.id === id)?.count || 0;

//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={count}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button onClick={() => handleAddToCart(listing, count)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
// }) {
//   const productData = productCount.find((p) => p.id === id);
//   const count = productData ? productData.count : 0;

//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={count}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button onClick={() => handleAddToCart(listing, count)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
// }) {
//   // Extract the count for the product. Ensure productCount is an array.
//   const count = productCount.find((p) => p.id === id)?.count || 0;

//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={count}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button onClick={() => handleAddToCart(listing, count)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
// }) {
//   const count = productCount.find((p) => p.id === id).count; // Extract count for the product
//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={count}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button onClick={() => handleAddToCart(listing, count)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default function ProductCard({
//   productName,
//   image,
//   brand,
//   price,
//   id,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   handleAddToCart,
//   listing,
//   qty,
// }) {
//   //whole thing freaked out when I added angle brackets around products in parameter list. Needs to be there, not in brackets
//   return (
//     <div>
//       <h2>{productName}</h2>
//       <img src={image} alt={productName} />
//       <h3>{brand}</h3>
//       <QuantityCounter
//         productCount={productCount}
//         cartList={productCount}
//         handleReduceCount={handleReduceCount}
//         handleAddCount={handleAddCount}
//         id={id}
//         mode="product"
//       />
//       <p>{price}</p>
//       <button
//         onClick={() =>
//           handleAddToCart(listing, productCount.find((p) => p.id === id).count)
//         }
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }
