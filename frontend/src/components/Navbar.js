//react17 does not need react import anymore
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      {" "}
      {/*  Logo */}
      <div className="navbar__logo">
        {" "}
        <hr> Space Travel </hr>
      </div>
      {/*  Links */}
      <ul className="navbar__links">
        <li>
          {" "}
          <Link to="/cart"></Link>
        </li>
      </ul>
      {/*  Hamburger Menu */}
    </div>
  );
};

export default NavBar;
