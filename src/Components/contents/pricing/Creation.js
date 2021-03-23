import { motion } from "framer-motion";

const Creation = () => {
  const wrapperVariant = {
    hidden: {
      y: "-250vw",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
      },
    },
  };
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
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="pricing_wrapper"
    >
      <div></div>
      <div className="pricing_content">
        <div className="pricing_content_left">
          <h1>Get $5 in PayQin Wallet</h1>
          <p>- Virtual Card funding: 650 XOF on any amount</p>
          <p>- Virtual card withdrawal: Free</p>
          <motion.div
            variants={buttonVariant}
            whileHover="hover"
            className="pricing_button_get_now"
          >
            <button className="get_now_button">get now</button>
          </motion.div>
        </div>
        <div className="pricing_content_right">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=" a payqin card"
            width="400"
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Creation;
