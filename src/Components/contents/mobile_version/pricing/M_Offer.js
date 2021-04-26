import { useTranslation } from "react-i18next";
const MOfferBasic = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_offer_basic">
        <h1 style={{ fontSize: "26px", paddingTop: "10%", paddingLeft: "7%" }}>
          {t("pricing.offer.left.type")}
        </h1>
        <ul style={{ color: "#888888" }}>
          <li style={{ paddingTop: "3%" }}>{t("pricing.offer.left.text1")}</li>
          <li style={{ paddingTop: "3%" }}>{t("pricing.offer.left.text2")}</li>
          <li style={{ paddingTop: "3%" }}>{t("pricing.offer.left.text3")}</li>
          <li style={{ paddingTop: "3%" }}>{t("pricing.offer.left.text4")}</li>
          <li style={{ paddingTop: "3%" }}>{t("pricing.offer.left.text5")}</li>
        </ul>
        <div className="button_account">
          <button onClick={handleClick}>
            {t("pricing.offer.left.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MOfferBasic;
