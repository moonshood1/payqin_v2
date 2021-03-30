import { useTranslation } from "react-i18next";
const MCryptoDoc = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="crypto_doc">
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("product.cryptoDoc.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("product.cryptoDoc.text")}
        </p>
        <div className="crypto_doc_button" style={{ marginTop: "10%" }}>
          <button onClick={handleClick}>{t("product.cryptoDoc.button")}</button>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
        <div className="crypto_doc_links">
          <a href="http://onelink.to/wgx597">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_kveok0.png"
              alt=""
              height="45px"
              style={{ marginRight: "8px" }}
            />
          </a>
          <a href="http://onelink.to/wgx597">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/Google-CTA_dcj7d0.png"
              alt=""
              height="45px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MCryptoDoc;
