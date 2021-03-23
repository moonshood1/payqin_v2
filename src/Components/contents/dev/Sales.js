import { motion } from "framer-motion";

const Sales = () => {
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Track Your Sales in Africa</h1>
        <p className="wrapper_text">
          Weekly detailed sales reports, real-time sales figures and best seller
          reports.
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
      <div
        className="product_wrapper_right resp sales"
        style={{ marginTop: "50px", marginLeft: "50px" }}
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/track-sales_vngpvr.png"
          alt="phone with parameters"
          height="400"
        />
      </div>
    </div>
  );
};

export default Sales;
