const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img
          src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
          alt="PayQin Logo"
        />
      </div>
      <div className="footer_links">
        <a href="/about">About</a>
        <a href="/help">Help</a>
        <a href="/Insurance">Insurance</a>
        <a href="/ambassadors">PayQin Ambassadors</a>
        <a href="/legal">Legal Notice</a>
      </div>
      <div className="footer_socials">
        <a href="/facebook">F</a>
        <a href="/twitter">t</a>
        <a href="/instagram">ig</a>
      </div>
      <div className="footer_contact">
        <button className="footer_contact_button">Contact us</button>
      </div>
      <div className="footer_website_reference">
        <p>PayQin © 2021 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
