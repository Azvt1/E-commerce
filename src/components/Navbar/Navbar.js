import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import user from "../../assets/img/la_user.svg";
import searchIcon from "../../assets/img/Search.svg";
import burgerIcon from "../../assets/img/burger.svg";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar_container">
      <nav className="navbar">
        <div className="image_container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className="menu"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar_middle">
          <ul className={openMenu ? "open" : ""}>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/shop">SHOP</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar_right">
          <ul className={openMenu ? "open" : ""}>
            <li>
              <NavLink to="/wishlist">WISHLIST</NavLink>
            </li>
            <li>
              <NavLink to="/cart">CART</NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <img src={user} />
              </NavLink>
            </li>
            {/* <li>
              <img src={burgerIcon} />
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
