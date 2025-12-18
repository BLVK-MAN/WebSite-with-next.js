import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Heart, Menu, X } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'
import './Header.css'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toggle, totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__container">
        <button 
          className="header__mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="header__logo" onClick={handleNavClick}>
          <span className="header__logo-text">
            Editorial<span className="header__logo-accent">.</span>
          </span>
        </Link>

        <nav className="header__nav">
          <Link
            to="/"
            className={`header__nav-link ${isActive('/') ? 'header__nav-link--active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={`header__nav-link ${isActive('/catalog') ? 'header__nav-link--active' : ''}`}
          >
            Catalog
          </Link>
          <Link
            to="/wishlist"
            className={`header__nav-link ${isActive('/wishlist') ? 'header__nav-link--active' : ''}`}
          >
            Wishlist
          </Link>
        </nav>

        <div className="header__actions">
          <Link to="/wishlist" className="header__action-button">
            <Heart size={24} />
            {wishlistItems.length > 0 && (
              <span className="header__badge header__badge--dot" />
            )}
          </Link>

          <button onClick={toggle} className="header__action-button">
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="header__badge header__badge--count">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="header__mobile-dropdown">
          <Link
            to="/"
            className={`header__mobile-link ${isActive('/') ? 'header__mobile-link--active' : ''}`}
            onClick={handleNavClick}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={`header__mobile-link ${isActive('/catalog') ? 'header__mobile-link--active' : ''}`}
            onClick={handleNavClick}
          >
            Catalog
          </Link>
          <Link
            to="/wishlist"
            className={`header__mobile-link ${isActive('/wishlist') ? 'header__mobile-link--active' : ''}`}
            onClick={handleNavClick}
          >
            Wishlist
          </Link>
        </div>
      )}
    </header>
  )
}