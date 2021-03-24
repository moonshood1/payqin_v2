import { motion } from "framer-motion";
const Payment = () => {
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Integrate the PayQin Payment Method</h1>
        <p className="wrapper_text">
          Integrate our Payment Method to reach out Million Users in Multiple
          Countries
        </p>
        <div className="wrapper_links">
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            className="api_doc_button"
          >
            api documentation
          </motion.button>
        </div>
      </div>
      <div
        className="product_wrapper_right pay resp"
        style={{ marginTop: "50px" }}
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/API-Illustration_kqv6dk.png"
          alt=" two talking about api"
          height="400"
          className="img_resp"
        />
      </div>
    </div>
  );
};

export default Payment;
