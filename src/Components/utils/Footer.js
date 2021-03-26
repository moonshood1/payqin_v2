const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_first_section">
        <div className="footer_logo">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt="PayQin Logo"
          />
        </div>
        <div className="footer_links">
          <a href="/about">A propos</a>
          <a href="/help">Aide</a>
          <a href="https://assurance.payqin.com">Assurance</a>
          <a href="https://ambassadeur.payqin.com">Ambassadeurs PayQin</a>
          <a href="/legal">Mention légale</a>
        </div>
        <div className="footer_socials">
          <a href="https://www.facebook.com/payqin/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/payqinn?lang=fr">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/payqin/">
            <i className="fab fa-instagram"></i>
          </a>
          <div className="footer_contact">
            <button className="footer_contact_button">Contactez-nous</button>
          </div>
        </div>
      </div>
      <div className="footer_second_section">
        <div className="footer_website_reference">
          <p>PayQin © 2021 Tous droits reservés</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
