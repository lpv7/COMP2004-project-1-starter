// 7. Quantity Counter is a presentational component that displays the number of items for each
// product. It has a button to increase the amount and another to decrease the number of products.
// Note: Products cannot be less than zero in the ProductCard and cannot be less than 1 in the
// CardCard. Please reuse the same component for both ProductCard and CartCard components.

//QuantityCounter: Here we all, at the end of all things...anywhoo! One feature that I like is
//that you could show a n00b the bottom components and fool them into thinking that react is
//simple and fun to use! Thanks again Z for telling me about mode!

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
