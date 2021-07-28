import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const background = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Modal = ({ showModal, setShowModal }) => {
  const { t, i18n } = useTranslation("common");
  const closeModal = () => {
    if (showModal == true) {
      setShowModal(false);
    }
  };

  const modalVariant = {
    hidden: {
      y: -250,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        type: "tween",
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="modal_background"
          variants={background}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={modalVariant} className="modal_container">
            <div className="modal_close">
              <button onClick={closeModal}>X</button>
            </div>
            <div className="modal_content" style={{ marginTop: "5%" }}>
              <h1>{t("modal.title")}</h1>
              <p style={{ color: "#888888", marginTop: "2%" }}>
                {t("modal.text")}
              </p>
              <div className="crypto_doc_buttons" style={{ marginTop: "5%" }}>
                <div className="crypto_doc_buttons_off">
                  <a href="https://apps.apple.com/fr/app/payqin/id1397872810">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/iOS-CTA_2x_felwyr_lqv0dy.png"
                      alt="app store"
                      className="ios"
                      style={{ marginRight: "2%" }}
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.payqin&hl=fr&gl=US">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Google-CTA_2x_iayzfn_x0u7up.png"
                      alt="google play"
                      className="google"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
