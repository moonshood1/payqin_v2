import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NotABank = () => {
  const { t, i18n } = useTranslation("common");
  const titleVariant = {
    hidden: {
      y: -250,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div className="product_wrapper">
      <div className="product_wrapper_left">
        <motion.h1
          className="wrapper_title"
          variants={titleVariant}
          initial="hidden"
          animate="visible"
        >
          {t("product.notABank.title")}
        </motion.h1>
        <motion.p
          initial={{ x: "-250vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            type: "spring",
            stiffness: 35,
          }}
          className="wrapper_text"
        >
          {t("product.notABank.text")}
        </motion.p>
        <motion.div
          initial={{ y: "350vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="wrapper_buttons"
        >
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
        </motion.div>
      </div>
      <div
        className="product_wrapper_right"
        style={{ marginTop: "3%", paddingLeft: "16%" }}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          /*src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/person-holding-phone_ag0pqs.png"*/
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1616431147/payqin/website/2_fissyp.png"
          alt="Not a Bank image"
        />
      </div>
    </motion.div>
  );
};

export default NotABank;
