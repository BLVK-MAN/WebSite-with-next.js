import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addItem, toggleCart } from '../store/cartSlice';
import { Button } from '../components/ui/Button';
import './ProductPage.css';

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const dispatch = useDispatch();

    if (!product) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch(addItem(product));
        dispatch(toggleCart());
    };

    return (
        <div className="product-page container">
            <div className="product-gallery">
                <img src={product.image} alt={product.title} className="product-main-image" />
            </div>
            <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">${product.price}</p>

                <div className="product-description">
                    <p>
                        Experience minimal elegance with our {product.title.toLowerCase()}.
                        Crafted from high-quality materials to ensure durability and comfort.
                        Perfect for the modern urban lifestyle.
                    </p>
                </div>

                <div className="add-to-cart-wrapper">
                    <Button size="lg" onClick={handleAddToCart} className="add-to-cart-btn">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
