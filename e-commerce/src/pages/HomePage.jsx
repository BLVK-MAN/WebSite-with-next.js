
import React from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import './HomePage.css'

export function HomePage() {
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__background">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
            alt="Fashion Editorial"
          />
        </div>
        <div className="hero__content">
          <div className="hero__text">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero__season"
            >
              Spring / Summer 2024
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero__title"
            >
              Urban
              <br />
              Minimalist
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/catalog">
                <Button size="lg" className="hero__cta">
                  Shop Collection
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured__header">
          <div>
            <h2 className="featured__title">
              Curated
              <br />
              Selection
            </h2>
          </div>
          <Link to="/catalog" className="featured__view-all">
            View All Products
          </Link>
        </div>

        <div className="featured__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="featured__view-all-mobile">
          <Link to="/catalog">
            <Button variant="outline" className="featured__view-all-btn">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      <section className="editorial-banner">
        <div className="editorial-banner__content">
          <h2 className="editorial-banner__quote">
            "Style is a way to say who you are without having to speak."
          </h2>
          <p className="editorial-banner__author">- Rachel Zoe</p>
        </div>
      </section>
    </div>
  )
}
