import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Payment = () => {
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
  const handleClick = () => {
    window.open("https://www.payqin.com/business-docs/#main-screen");
  };
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">{t("developpers.integration.title")}</h1>
        <p className="wrapper_text">{t("developpers.integration.text")}</p>
        <div className="wrapper_links">
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            className="api_doc_button"
            onClick={handleClick}
          >
            {t("developpers.integration.button")}
          </motion.button>
        </div>
      </div>
      <div
        className="product_wrapper_right pay resp"
        style={{ marginTop: "50px" }}
      >
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280728/main%20website/Devs/API-Illustration_kqv6dk_qyqoqy.png"
          alt=" two talking about api"
          height="400"
          className="img_resp"
        />
      </div>
    </div>
  );
};

export default Payment;
