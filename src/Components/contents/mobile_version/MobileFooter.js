import { useTranslation } from "react-i18next";

const MobileFooter = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="footer_container">
      <div className="mobile_footer">
        <div className="img">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt=""
          />
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
          <button>{t("footer.button")}</button>
        </div>
        <div className="footer_copyright" style={{ background: "#fff" }}>
          {t("footer.copyright")}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
