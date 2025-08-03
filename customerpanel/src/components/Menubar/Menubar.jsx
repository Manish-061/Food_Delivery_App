import "./Menubar.css";
import "../../assets/assets";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="menubar">
      <div className="menubar-container">
        <Link to="/" className="menubar-logo-link">
          <img src={assets.logo} alt="brand logo" className="menubar-logo" />
        </Link>

        <input type="checkbox" id="menu-toggle" className="menu-toggle-input" />
        <label htmlFor="menu-toggle" className="menu-toggle">
          <span className="hamburger"></span>
        </label>

        <div className="menubar-links-container">
          <ul className="menubar-links">
            <li className="menubar-item">
              <Link className="menubar-link" to="/">
                Home
              </Link>
            </li>
            <li className="menubar-item">
              <Link className="menubar-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="menubar-item">
              <Link className="menubar-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="menubar-right">
            <div className="cart-icon-wrapper">
              <img src={assets.cart} alt="food cart" className="cart-icon" />
              <span className="cart-badge">0</span>
            </div>

            <div className="auth-buttons">
              <button className="btn btn-outline-primary">Login</button>
              <button className="btn btn-success">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
