import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt="PayQin Logo"
          />
        </Link>
      </div>
      <div className="navbar_links">
        <NavLink activeClassName="is_active" to="/products">
          Products
        </NavLink>
        <NavLink activeClassName="is_active" to="/developpers">
          Developpers
        </NavLink>
        <NavLink activeClassName="is_active" to="/pricing">
          Pricing
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
