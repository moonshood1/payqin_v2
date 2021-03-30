import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Sales = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title"> {t("developpers.sales.title")}</h1>
        <p className="wrapper_text">{t("developpers.sales.text")}</p>
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
        className="product_wrapper_right resp sales"
        style={{ marginTop: "50px", marginLeft: "50px" }}
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/track-sales_vngpvr.png"
          alt="phone with parameters"
          height="400"
        />
      </div>
    </div>
  );
};

export default Sales;
