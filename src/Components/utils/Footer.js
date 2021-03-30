import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation("common");
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
          <a href="/about">{t("footer.about")}</a>
          <a href="/help">{t("footer.help")}</a>
          <a href="https://assurance.payqin.com">{t("footer.insurance")}</a>
          <a href="https://ambassadeur.payqin.com">{t("footer.ambassador")}</a>
          <a href="/legal">{t("footer.legal")}</a>
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
            <button className="footer_contact_button">
              {t("footer.button")}
            </button>
          </div>
        </div>
      </div>
      <div className="footer_second_section">
        <div className="footer_website_reference">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
