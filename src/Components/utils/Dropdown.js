import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const { t, i18n } = useTranslation("common");
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
              <a href="#">{t("dropdown.card")}</a>
            </p>
            <p>
              <a href="#">{t("dropdown.insurance")}</a>
            </p>
            <p>
              <a href="#">{t("dropdown.crypto")}e</a>
            </p>
            <p>
              <a href="#">{t("dropdown.download")}</a>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
