import { motion } from "framer-motion";
const Wordpress = () => {
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
    <div
      className="crypto_doc_wrapper wordpress_cont"
      style={{ background: "#F9F9F9", width: "100%", height: "600px" }}
    >
      <div className="crypto_doc_first_section">
        <h1>Wordpress Plugin</h1>
        <p>Catchy Tagline to download Wordpress plugin</p>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="button_container"
        >
          <button className="crypto_doc_link_create">Download plugin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Wordpress;
