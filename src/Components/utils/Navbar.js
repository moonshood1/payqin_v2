import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({
  showModal,
  setShowModal,
  setShowDropdown,
  showDropdown,
  TraductionLinks,
}) => {
  const { t, i18n } = useTranslation("common");
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
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280733/main%20website/n3-1_vscqvt_ljdred.png"
            alt="PayQin Logo"
          />
        </Link>
      </div>
      <div className="navbar_links">
        <NavLink
          activeClassName="is_active"
          to="/products"
          /*onClick={handleHover}*/
        >
          {t("navbar.prod")}
          <span style={{ marginLeft: "6px" }}>
            <i className="fas fa-caret-down"></i>
          </span>
        </NavLink>
        <NavLink activeClassName="is_active" to="/developpers">
          {t("navbar.dev")}
        </NavLink>
        <NavLink activeClassName="is_active" to="/pricing">
          {t("navbar.price")}
        </NavLink>
      </div>
      <div className="navbar_button">
        <button onClick={handleClick}>{t("navbar.button")}</button>
      </div>
      <TraductionLinks />
    </div>
  );
};

export default Navbar;
