import { useTranslation } from "react-i18next";
const MCryptoDoc = ({ handleClick, openAndroid, openApple }) => {
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
        <div
          className="crypto_doc_links"
          style={{
            display: "flex",
          }}
        >
          <div
            onClick={openApple}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <img
              src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
              alt=""
              height="45px"
            />
          </div>
          <div
            onClick={openAndroid}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <img
              src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
              alt=""
              height="45px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCryptoDoc;
