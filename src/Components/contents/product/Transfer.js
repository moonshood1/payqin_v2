import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Transfer = () => {
  const { t, i18n } = useTranslation("common");
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className="transfer_wrapper">
      <div className="transfer_wrapper_left">
        <div className="transfer_wrapper_left_first_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617880269/payqin/website/__1_OtIHOOxlUMHYsSWje1TmEQ_u3migr.jpg"
            alt="Boah Paid Amalaman"
          />
        </div>
        <div
          className="transfer_wrapper_left_second_section"
          style={{ paddingLeft: "3%" }}
        >
          <h1 style={{ fontSize: "63px" }}>{t("product.transfer.title1")}</h1>
          <p style={{ fontSize: "23px" }}>{t("product.transfer.text1")}</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button className="transfer_button_learn_more">
              {t("product.transfer.button")}
            </button>
          </motion.div>
        </div>
      </div>
      <div className="transfer_wrapper_right" style={{ paddingRight: "3%" }}>
        <div className="transfer_wrapper_right_first_section">
          <h1 style={{ fontSize: "63px" }}>{t("product.transfer.title2")}</h1>
          <p style={{ fontSize: "23px" }}>{t("product.transfer.text2")}</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button className="transfer_button_learn_more">
              {t("product.transfer.button")}
            </button>
          </motion.div>
        </div>
        <div className="transfer_wrapper_right_second_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617892739/payqin/website/shutterstock_1884302866_gdhme9.jpg"
            alt="two communicates"
          />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
