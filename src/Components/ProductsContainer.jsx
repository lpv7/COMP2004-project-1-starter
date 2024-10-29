// 3. ProductsContainer is a presentation component that renders all the product cards from the data
// passed from the parent component
import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products,
  productCount,
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
          productCount={productCount.find((p) => p.id === product.id).count}
          handleReduceCount={handleReduceCount}
          handleAddCount={handleAddCount}
          handleAddToCart={handleAddToCart}
          listing={product}
          // qty={productCount}
        />
      ))}
    </div>
  );
}
