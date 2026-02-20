import ProductList from './components/ProductList';

const products = [
  { id: 1, name: "Wireless Mouse", price: 29.99, inStock: true },
  { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: false },
  { id: 3, name: "Gaming Monitor", price: 199.99, inStock: true },
];

function App() {
  return (
    <div className="App">
      <h1>Tech Store</h1>
      <ProductList items={products} />
    </div>
  );
}

export default App;
