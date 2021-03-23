import { motion } from "framer-motion";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const handleLeave = () => {
    setShowDropdown(false);
  };

  const dropdownVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      {showDropdown && (
        <motion.div
          variants={dropdownVariant}
          initial="hidden"
          animate="visible"
          className="dropdown_container"
          onMouseLeave={handleLeave}
        >
          <div className="dropdown_content">
            <p>
              <a href="#">PayQin cards</a>
            </p>
            <p>
              <a href="#">Insurance</a>
            </p>
            <p>
              <a href="#">Crypto</a>
            </p>
            <p>
              <a href="#">Downloads</a>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
