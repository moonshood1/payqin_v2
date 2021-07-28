import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="footer">
      <div className="footer_first_section">
        <div className="footer_logo">
          <img
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280733/main%20website/n3-1_vscqvt_ljdred.png"
            alt="PayQin Logo"
          />
        </div>
        <div className="footer_links">
          <a href="/about">{t("footer.about")}</a>
          <a href="https://payqin.crisp.help/fr/">{t("footer.help")}</a>
          <a href="https://blog.payqin.com">blog</a>
          {/* <a href="https://assurance.payqin.com">{t("footer.insurance")}</a> */}
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
