import { motion } from "framer-motion";

const Payment = () => {
  const wrapperVariant = {
    hidden: {
      y: "250vw",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        type: "spring",
        mass: 0.5,
        damping: 15,
      },
    },
  };
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="product_wrapper"
    >
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">
          {/*Send and Receive Online Payment*/}
          Envoyez et recevez des paiements en ligne
        </h1>
        <p className="wrapper_text">
          {/* Sell online in African currencies with our Checkout. Implement our
          checkout and start selling*/}
          Vendez en ligne en devises africaines avec notre système de paiement.
          Implementez notre système de paiement et commencez à vendre
        </p>
        <div className="wrapper_buttons">
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
        </div>
      </div>
      <div className="product_wrapper_right resp" style={{ marginTop: "50px" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978217/payqin/website/send-receive_2x_s9usca.png"
          alt="a laying phone"
          height="400"
        />
      </div>
    </motion.div>
  );
};

export default Payment;
