import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CryptoDoc = ({ showModal, setShowModal }) => {
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
    setShowModal(true);
  };
  return (
    <div className="crypto_doc_wrapper">
      <div className="crypto_doc_first_section">
        <h1 style={{ marginLeft: "2%" }}>{t("product.cryptoDoc.title")}</h1>
        <p>{t("product.cryptoDoc.text")}</p>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="button_container"
        >
          <button className="crypto_doc_link_create" onClick={handleClick}>
            {t("product.cryptoDoc.button")}
          </button>
        </motion.div>
      </div>
      <div className="crypto_doc_buttons">
        <div className="crypto_doc_buttons_off">
          <a
            href="https://apps.apple.com/fr/app/payqin/id1397872810"
            style={{ marginRight: "10px" }}
          >
            <motion.img
              whileHover={{ scale: 1.06 }}
              src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
              alt="app store"
              className="ios"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.payqin&hl=fr&gl=US">
            <motion.img
              whileHover={{ scale: 1.06 }}
              src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
              alt="google play"
              className="google"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoDoc;
