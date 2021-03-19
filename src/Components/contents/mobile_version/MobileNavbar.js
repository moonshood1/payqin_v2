import { Link } from "react-router-dom";
const MobileNavbar = () => {
  return (
    <div className="mobile_navbar">
      <div className="mobile_navbar_menu_button_container">
        <button>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="mobile_navbar_logo">
        <Link to="/m">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt="PayQin Logo"
            className="mobile_logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
