import { useTranslation } from "react-i18next";

const MobileFooter = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="footer_container">
      <div className="mobile_footer">
        <div className="img">
          <img
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280733/main%20website/n3-1_vscqvt_ljdred.png"
            alt=""
          />
        </div>
        <div className="contacts" style={{ marginBottom: "5px" }}>
          <a href="https://twitter.com/payqinn?lang=fr">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/payqin/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/payqin/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        {/* <div className="footer_copyright" style={{ background: "#fff" }}>
          {t("footer.copyright")}
        </div> */}
      </div>
    </div>
  );
};

export default MobileFooter;
