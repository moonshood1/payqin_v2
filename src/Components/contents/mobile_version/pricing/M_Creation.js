import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const wrapperVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

const Mcreation = ({ handleClick }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="creation_container_mobile"
      style={{ height: "100%" }}
    >
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
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626352964/main%20website/payqin-cc-mockup_maeiax_gokljq.png"
            alt=""
            height="190"
          />
        </div>
        <div className="get_now_button">
          <button onClick={handleClick}>{t("pricing.creation.button")}</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Mcreation;
