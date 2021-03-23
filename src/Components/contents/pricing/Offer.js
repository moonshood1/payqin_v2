import { motion } from "framer-motion";
const Offer = () => {
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  return (
    <div className="pricing_wrapper">
      <div></div>
      <div className="pricing_offer_content">
        <div className="offer_content_left">
          <small>
            <b>free</b>
          </small>
          <h2>Basic</h2>
          <ul>
            <motion.li whileHover={{ x: 5 }}>€ 0 Monthly Fee</motion.li>
            <motion.li whileHover={{ x: 5 }}>
              Reload The Account - 3.5%
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>Withdrawal - 2%</motion.li>
            <motion.li whileHover={{ x: 5 }}>
              Free Transfer In 4 Countries
            </motion.li>
          </ul>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="offer_button_container"
          >
            <button className="offer_button">Open Account</button>
          </motion.div>
        </div>
        <div></div>
        <div className="offer_content_right">
          <small>
            <b>€ 12/ Yearly</b>
          </small>
          <h2>Premium</h2>
          <ul>
            <motion.li whileHover={{ x: 5 }}>€ 0 Monthly Fee</motion.li>
            <motion.li whileHover={{ x: 5 }}>
              Reload The Account - 3.5%
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>Withdrawal - 2%</motion.li>
            <motion.li whileHover={{ x: 5 }}>
              3 Year Master card Limit
            </motion.li>
          </ul>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="offer_button_container"
          >
            <button className="offer_button">Open Account</button>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Offer;
