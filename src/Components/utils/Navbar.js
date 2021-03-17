const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img
          src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
          alt="PayQin Logo"
        />
      </div>
      <div className="navbar_links">
        <a href="/products">Products</a>
        <a href="/dev">Developpers</a>
        <a href="/pricing">Pricing</a>
      </div>
    </div>
  );
};

export default Navbar;
