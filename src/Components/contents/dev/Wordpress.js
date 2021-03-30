import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Wordpress = () => {
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
  return (
    <div
      className="crypto_doc_wrapper wordpress_cont"
      style={{ background: "#F9F9F9", width: "100%", height: "600px" }}
    >
      <div className="crypto_doc_first_section">
        <h1>{t("developpers.wordpress.title")}</h1>
        <p>{t("developpers.wordpress.text")}</p>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="button_container"
        >
          <button className="crypto_doc_link_create">
            <i class="fab fa-wordpress"></i> {t("developpers.wordpress.button")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Wordpress;
