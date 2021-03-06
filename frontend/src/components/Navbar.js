//react17 does not need react import anymore
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          {" "}
          <h2 id=""> Star Silk Roads </h2>
        </Link>
      </div>
      {/*  Links */}
      <ul className="navbar__links">
        <li>
          {" "}
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"> </i>
            <span>
              {" "}
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>{" "}
            </span>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/shop" className="navbar__shop__link">
            Shop
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
