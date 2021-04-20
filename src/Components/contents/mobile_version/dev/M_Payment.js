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

const MPayment = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="default_payment"
      style={{ height: "100%" }}
    >
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          {t("developpers.payment.title")}
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          {t("developpers.payment.text")}
        </p>
        <div
          className="buttons"
          style={{ marginTop: "5%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <a href="http://onelink.to/wgx597">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </a>
          </div>
          <div className="butt_google">
            <a href="http://onelink.to/wgx597">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1618911655/payqin/website/ezgif-3-456b01e527_pfbqrh.gif"
          alt=""
          height="200"
        />
      </div>
    </motion.div>
  );
};

export default MPayment;
