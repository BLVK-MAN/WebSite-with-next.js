import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeItem } from '../store/cartSlice';
import { Button } from './ui/Button';
import './CartSidebar.css';

export function CartSidebar() {
    const dispatch = useDispatch();
    const { isOpen, items } = useSelector((state) => state.cart);

    const toggle = () => dispatch(toggleCart());
    const removeFromCart = (id) => dispatch(removeItem(id));

    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <div
                className={`cart-sidebar-overlay ${isOpen ? 'open' : ''}`}
                onClick={toggle}
            />
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Shopping Bag ({items.length})</h2>
                    <button className="cart-close-btn" onClick={toggle}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <ShoppingBag size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
                            <p>Your bag is empty.</p>
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <h3 className="cart-item-title">{item.title}</h3>
                                    <p className="cart-item-price">${item.price}</p>
                                    <button
                                        className="cart-item-remove"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Button size="lg" style={{ width: '100%' }}>
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );
}
