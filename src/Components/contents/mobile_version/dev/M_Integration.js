import { useTranslation } from "react-i18next";
const MIntegration = () => {
  const { t, i18n } = useTranslation("common");
  const handleClick = () => {
    window.open("https://www.payqin.com/business-docs/#main-screen");
  };
  return (
    <div className="default_payment" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("developpers.integration.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("developpers.integration.text")}
        </p>
      </div>
      <div className="second" style={{ marginTop: "7%" }}>
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280728/main%20website/Devs/API-Illustration_kqv6dk_qyqoqy.png"
          alt=""
          height="200"
        />
      </div>
      <div className="default_button">
        <button className="api" onClick={handleClick}>
          {t("developpers.integration.button")}
        </button>
      </div>
    </div>
  );
};

export default MIntegration;
