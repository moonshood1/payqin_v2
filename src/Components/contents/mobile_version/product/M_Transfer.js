import { useTranslation } from "react-i18next";
const MTransfer = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="transfer" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("product.transfer.title1")}
        </h1>
        <p style={{ color: "#888888" }}>{t("product.transfer.text1")}</p>
        <div
          className="transfer_button"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <button onClick={handleClick}>{t("product.transfer.button")}</button>
        </div>
        <div className="img" style={{ marginTop: "15%" }}>
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617892739/payqin/website/shutterstock_1884302866_gdhme9.jpg"
            alt=""
            height="220"
          />
        </div>
      </div>
    </div>
  );
};

export default MTransfer;
