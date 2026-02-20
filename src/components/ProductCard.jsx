import styles from '../styles/ProductCard.module.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ product }) {
  
  const cardClass = `${styles.card} ${!product.inStock ? styles.outOfStock : ''}`;

  return (
    <div className={cardClass}>
      <h3>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      
      <Button 
        variant="contained" 
        disabled={!product.inStock}
        startIcon={<ShoppingCartIcon />}
        color={product.inStock ? "primary" : "inherit"}
        fullWidth
      >
        {product.inStock ? "Add to Cart" : "Sold Out"}
      </Button>
    </div>
  );
}

export default ProductCard;

