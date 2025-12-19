import React from 'react';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { addItem as addItemToWishlist, removeItem as removeItemFromWishlist } from '../store/wishlistSlice';
import './HomePage.css';

export function HomePage() {
  const featuredProducts = products.slice(0, 8);
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isItemInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const handleWishlistClick = (e, product) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation();
    if (isItemInWishlist(product.id)) {
      dispatch(removeItemFromWishlist(product.id));
    } else {
      dispatch(addItemToWishlist(product));
    }
  };

  const handleAddToCartClick = (e, product) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation();
    dispatch(addItem(product));
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__subtitle">SPRING / SUMMER 2024</span>
          <h1 className="hero__title">URBAN<br />MINIMALIST</h1>
          <Link to="/catalog">
            <Button size="lg" variant="white">Shop Collection</Button>
          </Link>
        </div>
      </section>

      <section className="container products-section">
        <h2>Curated Selection</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image-wrapper">
                <Link to={`/product/${product.id}`} className="product-card__image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card__image"
                  />
                </Link>
                <div className="product-card__actions">
                  <button
                    className={`action-btn ${isItemInWishlist(product.id) ? 'active' : ''}`}
                    onClick={(e) => handleWishlistClick(e, product)}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} fill={isItemInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
                  <button
                    className="action-btn"
                    onClick={(e) => handleAddToCartClick(e, product)}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
              <div className="product-card__info">
                <div>
                  <h3 className="product-card__title">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p className="product-card__category">{product.category}</p>
                </div>
                <span className="product-card__price">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
