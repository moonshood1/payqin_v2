import { Link, NavLink } from "react-router-dom";

const Navbar = ({ showModal, setShowModal, setShowDropdown, showDropdown }) => {
  const handleClick = () => {
    if (showModal == false) {
      setShowModal(true);
    }
  };

  const handleHover = () => {
    if (showDropdown == false) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
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
        <NavLink
          activeClassName="is_active"
          to="/products"
          onClick={handleHover}
        >
          Products
          <span style={{ marginLeft: "6px" }}>
            <i className="fas fa-caret-down"></i>
          </span>
        </NavLink>
        <NavLink activeClassName="is_active" to="/developpers">
          Developpers
        </NavLink>
        <NavLink activeClassName="is_active" to="/pricing">
          Pricing
        </NavLink>
      </div>
      <div className="navbar_button">
        <button onClick={handleClick}>Create account</button>
      </div>
    </div>
  );
};

export default Navbar;
