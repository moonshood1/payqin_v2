import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Creation = ({ showModal, setShowModal }) => {
  const { t, i18n } = useTranslation("common");
  const wrapperVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
      },
    },
  };
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
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="pricing_wrapper"
    >
      <div></div>
      <div className="pricing_content">
        <div className="pricing_content_left">
          <h1> {t("pricing.creation.title")}</h1>
          <p>- {t("pricing.creation.text1")}</p>
          <p>- {t("pricing.creation.text2")}</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="pricing_button_get_now"
          >
            <button className="get_now_button" onClick={handleClick}>
              {t("pricing.creation.button")}
            </button>
          </motion.div>
        </div>
        <div className="pricing_content_right">
          <img
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280733/main%20website/pricing/payQin-card-illustration_kl22uo_g8zlsq.png"
            alt=" a payqin card"
            width="400"
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Creation;
