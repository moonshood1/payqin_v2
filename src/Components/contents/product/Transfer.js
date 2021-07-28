import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Transfer = ({ showModal, setShowModal }) => {
  const { t, i18n } = useTranslation("common");
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="transfer_wrapper">
      <div className="transfer_wrapper_left">
        <div className="transfer_wrapper_left_first_section">
          <img
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Products/__1_OtIHOOxlUMHYsSWje1TmEQ_u3migr_r3fdbu.jpg"
            alt="two people on phone"
          />
        </div>
        <div
          className="transfer_wrapper_left_second_section"
          style={{ paddingLeft: "7%" }}
        >
          <h1 style={{ fontSize: "55px", marginTop: "4%" }}>
            {t("product.transfer.title1")}
          </h1>
          <p style={{ fontSize: "23px" }}>{t("product.transfer.text1")}</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button
              className="transfer_button_learn_more"
              onClick={handleClick}
            >
              {t("product.transfer.button")}
            </button>
          </motion.div>
        </div>
      </div>
      <div className="transfer_wrapper_right" style={{ paddingRight: "3%" }}>
        <div className="transfer_wrapper_right_first_section">
          <h1 style={{ fontSize: "55px" }}>{t("product.transfer.title2")}</h1>
          <p style={{ fontSize: "23px" }}>{t("product.transfer.text2")}</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button
              className="transfer_button_learn_more"
              onClick={handleClick}
            >
              {t("product.transfer.button")}
            </button>
          </motion.div>
        </div>
        <div className="transfer_wrapper_right_second_section">
          <img
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280729/main%20website/Products/shutterstock_1884302866_gdhme9_imcp2f.jpg"
            alt="two communicates on payment"
          />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
