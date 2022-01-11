//react17 does not need react import anymore
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <hr> Space Travel </hr>
      </div>
      {/*  Links */}
      <ul className="navbar__links">
        <li>
          {" "}
          <Link to="/cart">
            <i className="fas fa-shopping-cart"> </i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
