import { useTranslation } from "react-i18next";
const Mcreation = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_wallet">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>{t("pricing.creation.title")}</h1>
          <p style={{ color: "#888888", marginTop: "4%" }}>
            - {t("pricing.creation.text1")}
          </p>
          <p style={{ color: "#888888" }}>- {t("pricing.creation.text2")}</p>
        </div>
        <div className="card_first">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=""
            height="190"
          />
          <p style={{ marginTop: "4%" }}>
            <b>{t("pricing.creation.price")} : 10 000 XOF</b>
          </p>
        </div>
        <div className="get_now_button">
          <button onClick={handleClick}>{t("pricing.creation.button")}</button>
        </div>
      </div>
    </div>
  );
};

export default Mcreation;
