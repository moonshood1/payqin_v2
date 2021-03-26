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
              <a href="#">Cartes PayQin</a>
            </p>
            <p>
              <a href="#">Assurance</a>
            </p>
            <p>
              <a href="#">Cryptomonnaie</a>
            </p>
            <p>
              <a href="#">Téléchargements</a>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
