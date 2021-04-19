import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NotABank = () => {
  const { t, i18n } = useTranslation("common");
  const titleVariant = {
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
  return (
    <motion.div
      className="product_wrapper"
      variants={titleVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">{t("product.notABank.title")}</h1>
        <p className="wrapper_text">{t("product.notABank.text")}</p>
        <div className="wrapper_buttons">
          <div className="wrapper_button_ios">
            <a href="https://apps.apple.com/fr/app/payqin/id1397872810">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                className="ios"
              />
            </a>
          </div>
          <div className="wrapper_button_google">
            <a href="https://play.google.com/store/apps/details?id=com.payqin&hl=fr&gl=US">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Play Store download"
                className="google"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="product_wrapper_right"
        style={{ marginTop: "3%", paddingLeft: "16%" }}
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1616431147/payqin/website/2_fissyp.png"
          alt="Not a Bank image"
        />
      </div>
    </motion.div>
  );
};

export default NotABank;
