import './cssfiles/App.css';
import Navbarr from './Navbarr.js';
import Footer from './Footer.js';
import Addcart from './Addcart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Books from './Books';

import Loginmodal from './Loginmodal.js';

export default function App() {

  const [lpanel, setLpanel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0); // 🔥 IMPORTANT

  /* ========================= */
  /* 🔥 LOGIN CHECK */
  /* ========================= */

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      setLpanel(false);
    } else {
      setIsLoggedIn(false);
      setLpanel(false);
    }
  }, []);

  /* ========================= */
  /* 🔥 CART COUNT LOGIC (FIX) */
  /* ========================= */

  useEffect(() => {

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

      setCartCount(total);
    };

    updateCartCount(); // 🔥 initial load

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount); // 🔥 multi-tab fix

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };

  }, []);

  return (
    <BrowserRouter>

      <Navbarr 
        openLogin={() => setLpanel(true)} 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cartCount={cartCount} // 🔥 PASS KARNA ZARURI
      />

      <Loginmodal 
        panelor={lpanel} 
        setLpanel={setLpanel}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/cart" element={<Addcart />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
