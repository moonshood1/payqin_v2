import { useTranslation } from "react-i18next";
const MWordpress = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="default_payment bg" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "15%" }}>
          {t("developpers.wordpress.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "2%" }}>
          {t("developpers.wordpress.text")}
        </p>
        <div className="default_button_wordpress">
          <button className="wordpress">
            <i class="fab fa-wordpress"></i> {t("developpers.wordpress.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MWordpress;
