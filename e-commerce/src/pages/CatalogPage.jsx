import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { addItem as addItemToWishlist, removeItem as removeItemFromWishlist } from '../store/wishlistSlice';
import './CatalogPage.css';
import './HomePage.css'; // Import shared styles for products grid

export function CatalogPage() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const isItemInWishlist = (id) => wishlistItems.some((item) => item.id === id);

    const handleWishlistClick = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        if (isItemInWishlist(product.id)) {
            dispatch(removeItemFromWishlist(product.id));
        } else {
            dispatch(addItemToWishlist(product));
        }
    };

    const handleAddToCartClick = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addItem(product));
    };

    return (
        <div className="catalog-page container">
            <h1 className="catalog-title">CATALOG</h1>
            <div className="products-grid">
                {products.map((product) => (
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
        </div>
    );
}
