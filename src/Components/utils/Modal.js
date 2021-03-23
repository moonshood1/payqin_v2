import { motion, AnimatePresence } from "framer-motion";

const background = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Modal = ({ showModal, setShowModal }) => {
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
              <h1>Account Creation</h1>
              <p style={{ color: "#888888" }}>
                To create an account, you need first of all , to download the
                App on your phone depending on your OS
              </p>
              <div className="crypto_doc_buttons" style={{ marginTop: "5%" }}>
                <div className="crypto_doc_buttons_off">
                  <a href="/appstore">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                      alt="app store"
                      className="ios"
                      style={{ marginRight: "2%" }}
                    />
                  </a>
                  <a href="/playstore">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
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
