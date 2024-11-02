// 3. ProductsContainer is a presentation component that renders all the product cards from the data
// passed from the parent component

//import ProductCard, the next child component

import ProductCard from "./ProductCard";

//ProductsContainer: Not too much happening here, but note that we are using the map function to render
//out every product available in the store to its own individual ProductCard.

export default function ProductsContainer({
  products,
  productCount,
  cartList,
  handleReduceCount,
  handleAddCount,
  handleAddToCart,
}) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          productCount={productCount}
          cartList={cartList}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleAddToCart={handleAddToCart}
          listing={product}
        />
      ))}
    </div>
  );
}
