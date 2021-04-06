import { useTranslation } from "react-i18next";
const MOfferPremium = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_offer_premium">
        <small style={{ color: "white", paddingLeft: "7%" }}>
          <b>{t("pricing.offer.right.amount")}</b>
        </small>
        <h1
          style={{
            fontSize: "26px",
            paddingTop: "10%",
            paddingLeft: "7%",
            color: "white",
          }}
        >
          {t("pricing.offer.right.type")}
        </h1>
        <ul style={{ color: "white" }}>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text1")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text2")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text3")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text4")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text5")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text6")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text7")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text8")}</li>
          <li style={{ paddingTop: "2%" }}>{t("pricing.offer.right.text9")}</li>
        </ul>
        <div className="button_account">
          <button onClick={handleClick}>
            {t("pricing.offer.right.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MOfferPremium;
