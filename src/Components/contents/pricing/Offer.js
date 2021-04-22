import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { t, i18n } = useTranslation("common");
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="pricing_wrapper">
      <div></div>
      <div className="pricing_offer_content">
        <div className="offer_content_left">
          <small>
            <b>{t("pricing.offer.left.amount")}</b>
          </small>
          <h2>{t("pricing.offer.left.type")}</h2>
          <ul style={{ marginTop: "2%" }}>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.left.text1")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.left.text2")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.left.text3")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.left.text4")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.left.text5")}
            </motion.li>
          </ul>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="offer_button_container"
          >
            <button className="offer_button">
              {t("pricing.offer.left.button")}
            </button>
          </motion.div>
        </div>
        <div></div>
        <div className="offer_content_right">
          <small>
            <b>{t("pricing.offer.right.amount")}</b>
          </small>
          <h2>{t("pricing.offer.right.type")}</h2>
          <ul style={{ marginTop: "2%" }}>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text1")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text2")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text3")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text4")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text5")}
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              {t("pricing.offer.right.text6")}
            </motion.li>
          </ul>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="offer_button_container"
          >
            <button className="offer_button">
              {t("pricing.offer.left.button")}
            </button>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Offer;
