import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const background = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Overlay = ({ showOverlay, setShowOverlay }) => {
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
                <Link to="/products">Products</Link>
              </p>
              <p>
                <Link to="/developpers">Developpers</Link>
              </p>
              <p>
                <Link to="/pricing">Pricing</Link>
              </p>
            </div>
            <div className="overlay_button">
              <button>Create account</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
