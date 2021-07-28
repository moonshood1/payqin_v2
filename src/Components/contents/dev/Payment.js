import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Payment = () => {
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
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="product_wrapper"
    >
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">{t("developpers.payment.title")}</h1>
        <p className="wrapper_text">{t("developpers.payment.text")}</p>
        <div className="wrapper_buttons">
          <div className="wrapper_button_ios">
            <a href="https://apps.apple.com/fr/app/payqin/id1397872810">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
                alt="App store download"
                className="ios"
              />
            </a>
          </div>
          <div className="wrapper_button_google">
            <a href="https://play.google.com/store/apps/details?id=com.payqin&hl=fr&gl=US">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
                alt="Play Store download"
                className="google"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="product_wrapper_right resp" style={{ marginTop: "50px" }}>
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280738/main%20website/Devs/ezgif-3-456b01e527_pfbqrh_sm5gaw.gif"
          alt="a laying phone"
          height="400"
        />
      </div>
    </motion.div>
  );
};

export default Payment;
