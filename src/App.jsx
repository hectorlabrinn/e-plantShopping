
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
import AboutUs from './AboutUs';

function App() {

  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Landing → productos
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // volver a home
  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  // abrir carrito
  const handleShowCart = () => {
    setShowCart(true);
  };

  // volver a productos (esto arregla tu error rojo)
  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="app-container">

      {/* LANDING PAGE */}
      {!showProductList && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>

              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>

            <div className="aboutus_container">
              <AboutUs/>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT LIST */}
      {showProductList && !showCart && (
        <div className="product-list-container visible">
          <ProductList
            onHomeClick={handleHomeClick}
            onShowCart={handleShowCart}
          />
        </div>
      )}

      {/* CART */}
      {showProductList && showCart && (
        <CartItem onContinueShopping={handleContinueShopping}/>
      )}

    </div>
  );
}

export default App;



