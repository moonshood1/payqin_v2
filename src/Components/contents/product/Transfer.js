import { motion } from "framer-motion";

const Transfer = () => {
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
    <div className="transfer_wrapper">
      <div className="transfer_wrapper_left">
        <div className="transfer_wrapper_left_first_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978189/payqin/website/pay-friends_rcmrwj.png"
            alt="Boah Paid Amalaman"
          />
        </div>
        <div
          className="transfer_wrapper_left_second_section"
          style={{ paddingLeft: "3%" }}
        >
          <h1 style={{ fontSize: "63px" }}>Pay Business</h1>
          <p style={{ fontSize: "23px" }}>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button className="transfer_button_learn_more">learn more</button>
          </motion.div>
        </div>
      </div>
      <div className="transfer_wrapper_right" style={{ paddingRight: "3%" }}>
        <div className="transfer_wrapper_right_first_section">
          <h1 style={{ fontSize: "63px" }}>Pay Friends</h1>
          <p style={{ fontSize: "23px" }}>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="transfer_button"
          >
            <button className="transfer_button_learn_more">learn more</button>
          </motion.div>
        </div>
        <div className="transfer_wrapper_right_second_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/pay-business_kl246i.png"
            alt="two communicates"
          />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
