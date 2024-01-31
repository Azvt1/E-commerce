import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import user from "../../assets/img/la_user.svg";
const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="pages">Pages</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Wishlist</li>
            <li>Cart</li>
            <img src={user} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
