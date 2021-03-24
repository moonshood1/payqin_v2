const MobileFooter = () => {
  return (
    <div className="footer_container">
      <div className="mobile_footer">
        <div className="img">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt=""
          />
        </div>
        <div className="links">
          <p style={{ paddingTop: "1%" }}>
            <a href="#">About</a>{" "}
          </p>
          <p style={{ paddingTop: "1%" }}>
            <a href="#">Blog</a>{" "}
          </p>
          <p style={{ paddingTop: "1%" }}>
            <a href="#">Help</a>{" "}
          </p>
          <p style={{ paddingTop: "1%" }}>
            <a href="#">Insurance</a>{" "}
          </p>
          <p style={{ paddingTop: "1%" }}>
            <a href="#">Help Notice</a>
          </p>
          <p style={{ paddingTop: "1%" }}>
            <a href="#">PayQin Ambassadors</a>
          </p>
        </div>
        <div className="contacts">
          <a href="https://twitter.com/payqinn?lang=fr">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/payqin/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/payqin/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <button>Contact us</button>
        </div>
      </div>
      <div className="footer_copyright" style={{ background: "#fff" }}>
        PayQin © 2021 All Rights Reserved
      </div>
    </div>
  );
};

export default MobileFooter;
