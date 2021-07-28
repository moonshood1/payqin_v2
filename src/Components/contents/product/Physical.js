import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Physical = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="product_wrapper bg-dark">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title" style={{ fontSize: "63px" }}>
          {t("product.physical.title")}
        </h1>
        <p className="wrapper_text" style={{ fontSize: "23px" }}>
          {t("product.physical.text")}
        </p>
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
      <div className="product_wrapper_right" style={{ paddingLeft: "3%" }}>
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280740/main%20website/Products/3_gqdoac_cp2nnv.png"
          alt="Physical image"
        />
      </div>
    </div>
  );
};

export default Physical;
