import { useTranslation } from "react-i18next";
const MCrypto = ({ openAndroid, openApple }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="crypto">
      <div className="first" style={{ textAlign: "center" }}>
        <h1
          style={{ fontSize: "26px", marginTop: "10%" }}
          className="productMTitle"
        >
          {t("product.crypto.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("product.crypto.text")}
        </p>
        <div
          className="buttons"
          style={{ marginTop: "5%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <div onClick={openApple}>
              <img
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </div>
          </div>
          <div className="butt_google">
            <div onClick={openAndroid}>
              <img
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Products/1_ipfubb_xbp5ny.png"
          alt=""
          height="250"
        />
      </div>
    </div>
  );
};

export default MCrypto;
