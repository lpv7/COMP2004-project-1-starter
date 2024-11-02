// 7. Quantity Counter is a presentational component that displays the number of items for each
// product. It has a button to increase the amount and another to decrease the number of products.
// Note: Products cannot be less than zero in the ProductCard and cannot be less than 1 in the
// CardCard. Please reuse the same component for both ProductCard and CartCard components.

export default function QuantityCounter({
  handleReduceCount,
  handleAddCount,
  productCount,
  id,
  mode,
}) {
  return (
    <div>
      <button
        className="quantityBtn"
        onClick={() => handleReduceCount(id, mode)}
      >
        -
      </button>
      <p>{productCount}</p>
      <button className="quantityBtn" onClick={() => handleAddCount(id, mode)}>
        +
      </button>
    </div>
  );
}

// export default function QuantityCounter({
//   handleReduceCount,
//   handleAddCount,
//   productCount,
//   id,
//   mode,
//   cartList,
//   key,
// }) {
//   return (
//     <div>
//       <button
//         className="quantityBtn" //CSS styling from App.css
//         onClick={() => handleReduceCount(id, mode)}
//       >
//         -
//       </button>
//       {/* set initial value at 0 if it is not greater than 0; this should catch NaN, "", etc. as well. */}
//       {/* <p>{productCount.count >= 0 ? productCount.count : 0}</p> */}
//       <p>{productCount}</p>

//       <button
//         className="quantityBtn" //from App.css
//         // onClick={() =>
//         //   setQuantityCount((prevQuantity) => {
//         //     return { ...prevQuantity, quantity: prevQuantity.quantity + 1 };
//         //   })
//         onClick={() => handleAddCount(id, mode)}
//       >
//         +
//       </button>
//     </div>
//   );
// }
