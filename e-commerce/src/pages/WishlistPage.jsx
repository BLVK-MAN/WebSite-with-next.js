import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem as addItemToWishlist, removeItem as removeItemFromWishlist } from '../store/wishlistSlice';
import { addItem as addItemToCart, toggleCart } from '../store/cartSlice';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import './WishlistPage.css';

export function WishlistPage() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.wishlist.items);

    const handleMoveToCart = (item) => {
        dispatch(addItemToCart(item));
        dispatch(removeItemFromWishlist(item.id)); // Remove from wishlist
        dispatch(toggleCart()); // Open cart
    };

    const toggleItem = (item) => {
        dispatch(removeItemFromWishlist(item.id));
    };

    if (items.length === 0) {
        return (
            <div className="container wishlist-empty">
                <h1>Your Wishlist</h1>
                <p>Your wishlist is currently empty.</p>
                <Link to="/catalog">
                    <Button style={{ marginTop: '1rem' }}>Browse Catalog</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container wishlist-page">
            <h1>Your Wishlist ({items.length})</h1>
            <div className="products-grid">
                {items.map((item) => (
                    <div key={item.id} className="product-card">
                        <Link to={`/product/${item.id}`} className="product-card__image-container">
                            <div className="product-card__image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="product-card__image"
                                />
                                <div className="product-card__actions">
                                    <button
                                        className="action-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMoveToCart(item);
                                        }}
                                        title="Add to Cart"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                    </button>
                                    <button
                                        className="action-btn active"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleItem(item);
                                        }}
                                        title="Remove from Wishlist"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <div className="product-card__info">
                            <div>
                                <h3 className="product-card__title">
                                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p className="product-card__category">{item.category}</p>
                            </div>
                            <span className="product-card__price">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
