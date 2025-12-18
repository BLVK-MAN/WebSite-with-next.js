import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Header } from './components/Header';
import { CartSidebar } from './components/CartSidebar';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { WishlistPage } from './pages/WishlistPage';
import './App.css';
export function App() {
  return <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </main>
          <CartSidebar />

          <footer className="app__footer">
            <div className="app__footer-content">
              <p className="app__footer-logo">Editorial.</p>
              <p className="app__footer-copyright">
                © 2024 Editorial Commerce. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </Provider>;
}