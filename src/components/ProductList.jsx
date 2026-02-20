import ProductCard from './ProductCard';

function ProductList({ items }) {
  const availableItems = items.filter(p => p.inStock);

  return (
    <>
      <h2>Available Products</h2>
      {availableItems.length === 0 ? (
        <p>Sorry, no products are currently in stock.</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;

