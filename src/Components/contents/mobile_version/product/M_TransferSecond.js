import { useTranslation } from "react-i18next";
const MTransferSecond = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="transfer" style={{ height: "100%" }}>
      <div className="second" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("product.transfer.title2")}
        </h1>
        <p style={{ color: "#888888" }}>{t("product.transfer.text2")}</p>
        <div
          className="transfer_button"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <button onClick={handleClick}>{t("product.transfer.button")}</button>
        </div>
        <div className="img" style={{ marginTop: "15%" }}>
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617880269/payqin/website/__1_OtIHOOxlUMHYsSWje1TmEQ_u3migr.jpg"
            alt=""
            height="190"
          />
        </div>
      </div>
    </div>
  );
};

export default MTransferSecond;
