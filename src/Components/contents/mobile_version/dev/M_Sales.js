import { useTranslation } from "react-i18next";
const MSales = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="default_payment bg" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("developpers.sales.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("developpers.sales.text")}
        </p>
        <div
          className="buttons"
          style={{ marginTop: "5%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <a href="http://onelink.to/wgx597">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </a>
          </div>
          <div className="butt_google">
            <a href="http://onelink.to/wgx597">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/track-sales_vngpvr.png"
          alt=""
          height="250"
        />
      </div>
    </div>
  );
};

export default MSales;
