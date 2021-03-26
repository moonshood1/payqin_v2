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
          Produits
          <span style={{ marginLeft: "6px" }}>
            <i className="fas fa-caret-down"></i>
          </span>
        </NavLink>
        <NavLink activeClassName="is_active" to="/developpers">
          Developpeurs
        </NavLink>
        <NavLink activeClassName="is_active" to="/pricing">
          Tarification
        </NavLink>
      </div>
      <div className="navbar_button">
        <button onClick={handleClick}>Ouvrir un compte</button>
      </div>
    </div>
  );
};

export default Navbar;
