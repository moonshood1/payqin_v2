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

const MNotABank = ({ openAndroid, openApple }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="notabank"
      style={{ height: "100%" }}
    >
      <div className="first" style={{ textAlign: "center" }}>
        <h1
          style={{ fontSize: "26px", marginTop: "10%" }}
          className="productMTitle"
        >
          {t("product.notABank.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("product.notABank.text")}
        </p>
        <div
          className="buttons"
          style={{ marginTop: "5%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <div onClick={openApple}>
              <img
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </div>
          </div>
          <div className="butt_google">
            <div onClick={openAndroid}>
              <img
                src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
        <img
          src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280734/main%20website/Products/2_fissyp_przioy.png"
          alt=""
          height="220"
        />
      </div>
    </motion.div>
  );
};

export default MNotABank;
