import "./cssfiles/Footer.css";
import { Link } from 'react-router-dom';
import yourbookstorelogo from './pictures/yourbookstorelogo.png';
import Image from 'react-bootstrap/Image';

export default function Footer() {
  return (
    <footer className="footer">

      {/* 🔥 BIG DESCRIPTION */}
      <div className="footer-top">
        <h2>YOUR BOOKSTORE – KNOWLEDGE, STORIES & INSPIRATION</h2>

        <p>
          Books keep us inspired. Keep us learning. Bring us together. Through stories,
          we explore new worlds, gain knowledge, and grow as individuals. From timeless
          classics to modern bestsellers, our bookstore is designed for readers who seek
          more from life.
        </p>

        <p>
          Discover books that challenge your thinking, improve your mindset, and fuel your
          imagination. Whether you're a student, a professional, or someone who simply loves
          reading, we have something for everyone.
        </p>

        <p>
          YOUR BOOKSTORE is more than just a place to buy books — it's a space for growth,
          creativity, and transformation. Wherever your journey takes you, we are here to
          support you with the best reads.
        </p>
      </div>

      {/* 🔥 LOGO CENTER */}
      <div className="footer-logo">
        <Image src={yourbookstorelogo} alt="logo" />
      </div>

      {/* 🔥 LINKS SECTION */}
      <div className="footer-container">

        <div className="footer-section">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>FAQs</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

      </div>

      {/* 🔥 DIVIDER */}
      <hr className="footer-line" />

      {/* 🔥 POLICY LINKS */}
      <div className="footer-policy">
        <p>Cookie Settings</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Cookies</p>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="footer-bottom">
        © 2026 YOUR BOOKSTORE Pvt. Ltd.
      </div>

    </footer>
  );
}