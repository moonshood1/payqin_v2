import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const background = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Overlay = ({ showOverlay, setShowOverlay }) => {
  const handleClick = () => {
    window.open("http://onelink.to/wgx597");
  };
  const { t, i18n } = useTranslation("common");
  const closeOverlay = () => {
    if (showOverlay) {
      setShowOverlay(false);
    }
  };
  const overlay_content = {
    hidden: {
      opacity: 0,
      x: "-250vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        mass: 0.5,
        damping: 15,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showOverlay && (
        <motion.div
          variants={background}
          initial="hidden"
          animate="visible"
          className="overlay_background"
        >
          <motion.div variants={overlay_content} className="overlay_container">
            <div className="overlay_close">
              <button onClick={closeOverlay}>X</button>
            </div>
            <div className="overlay_content">
              <p>
                <Link to="/products" onClick={closeOverlay}>
                  {t("overlay.prod")}
                </Link>
              </p>
              <p>
                <Link to="/developpers" onClick={closeOverlay}>
                  {t("overlay.dev")}
                </Link>
              </p>
              <p>
                <Link to="/pricing" onClick={closeOverlay}>
                  {t("overlay.price")}
                </Link>
              </p>
            </div>
            <div className="overlay_button">
              <button onClick={handleClick}>{t("overlay.button")}</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
