// 6. CartCard is a presentational component that displays an image of the product, the price, the
// quantity, and the sub-total of the products. It also has the QuantityCounter component, which
// allows users to edit the number of the same product they put in the cart, and a remove item button
// that will remove the item from the cart.

import QuantityCounter from "./QuantityCounter";

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
        <b>Total: {(qty * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
      </p>
      <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
    </div>
  );
}

// export default function CartCard({
//   image,
//   productName,
//   price,
//   qty,
//   handleReduceCount,
//   handleAddCount,
//   handleRemoveFromCart, // Accept the new function
//   id,
// }) {
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         productCount={qty}
//         handleReduceCount={() => handleReduceCount(id, "cart")}
//         handleAddCount={() => handleAddCount(id, "cart")}
//         id={id}
//         mode="cart"
//       />
//       <p>
//         <b>Total: {(qty * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   qty,
//   handleReduceCount,
//   handleAddCount,
//   handleRemoveFromCart, // Accept the new function
//   id,
// }) {
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         productCount={qty}
//         handleReduceCount={() => handleReduceCount(id, "cart")}
//         handleAddCount={() => handleAddCount(id, "cart")}
//         id={id}
//         mode="cart"
//       />
//       <p>
//         <b>Total: {(qty * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button onClick={() => handleRemoveFromCart(id)}>Remove</button>{" "}
//       {/* Add onClick handler */}
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   qty,
//   handleReduceCount,
//   handleAddCount,
//   id,
// }) {
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         productCount={qty}
//         handleReduceCount={() => handleReduceCount(id, "cart")}
//         handleAddCount={() => handleAddCount(id, "cart")}
//         id={id}
//         mode="cart"
//       />
//       <p>
//         <b>Total: {(qty * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   id,
// }) {
//   const productData = productCount.find((p) => p.id === id);
//   const count = productData ? productData.count : 0;

//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         handleAddCount={handleAddCount}
//         handleReduceCount={handleReduceCount}
//         id={id}
//         mode="cart"
//         productCount={count}
//       />
//       <p>
//         <b>Total: {(count * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   id,
// }) {
//   // Extract the count for the product in the cart. Ensure productCount is an array.
//   const count = productCount.find((p) => p.id === id)?.count || 0;

//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         handleAddCount={handleAddCount}
//         handleReduceCount={handleReduceCount}
//         id={id}
//         mode="cart"
//         productCount={count}
//       />
//       <p>
//         <b>Total: {(count * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   id,
// }) {
//   const count = productCount.find((p) => p.id === id).count; // Extract count for the product in the cart
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         handleAddCount={handleAddCount}
//         handleReduceCount={handleReduceCount}
//         id={id}
//         mode="cart"
//         productCount={count}
//       />
//       <p>
//         <b>Total: {(count * parseFloat(price.replace("$", ""))).toFixed(2)}</b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   productCount,
//   handleReduceCount,
//   handleAddCount,
//   id,
// }) {
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         handleAddCount={handleAddCount}
//         handleReduceCount={handleReduceCount}
//         id={id}
//         mode="cart"
//         productCount={productCount}
//       />
//       <p>
//         <b>
//           Total:{" "}
//           {(productCount * parseFloat(price.replace("$", ""))).toFixed(2)}
//         </b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }

// export default function CartCard({
//   image,
//   productName,
//   price,
//   quantity,
//   products,
//   productCount,
//   cartList,
//   id,
//   handleReduceCount,
//   handleAddCount,
// }) {
//   return (
//     <div className="CartCard">
//       <img src={image} alt={productName} />
//       <h4>{productName}</h4>
//       <p>{price}</p>
//       <QuantityCounter
//         handleAddCount={handleAddCount}
//         handleReduceCount={handleReduceCount}
//         id={id}
//         mode="cart"
//         productCount={productCount}
//         cartList={cartList}
//       />
//       <p>
//         {/* previously had cartList instead of ProductCount */}
//         <b>Total: {(productCount * price.replace("$", "")).toFixed(2)}</b>
//       </p>
//       <button>Remove</button>
//     </div>
//   );
// }
