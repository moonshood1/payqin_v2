import { motion } from "framer-motion";

const NotABank = () => {
  const titleVariant = {
    hidden: {
      y: -250,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div className="product_wrapper">
      <div className="product_wrapper_left">
        <motion.h1
          className="wrapper_title"
          variants={titleVariant}
          initial="hidden"
          animate="visible"
        >
          We’re not a Bank, We’re better
        </motion.h1>
        <motion.p
          initial={{ x: "-250vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            type: "spring",
            stiffness: 35,
          }}
          className="wrapper_text"
        >
          A safe and secure environment for your internet transactions anywhere
          in the world
        </motion.p>
        <motion.div
          initial={{ y: "350vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="wrapper_buttons"
        >
          <div className="wrapper_button_ios">
            <a href="/appstore">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                className="ios"
              />
            </a>
          </div>
          <div className="wrapper_button_google">
            <a href="/playstore">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Play Store download"
                className="google"
              />
            </a>
          </div>
        </motion.div>
      </div>
      <div
        className="product_wrapper_right"
        style={{ marginTop: "3%", paddingLeft: "16%" }}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          /*src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/person-holding-phone_ag0pqs.png"*/
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1616431147/payqin/website/2_fissyp.png"
          alt="Not a Bank image"
        />
      </div>
    </motion.div>
  );
};

export default NotABank;
