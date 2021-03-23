import { motion } from "framer-motion";
const Physical = () => {
  return (
    <div className="product_wrapper bg-dark">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title" style={{ fontSize: "63px" }}>
          Send Money to Friends
        </h1>
        <p className="wrapper_text" style={{ fontSize: "23px" }}>
          You like it virtual or Physical ? We got both for you
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
      <div className="product_wrapper_right" style={{ paddingLeft: "3%" }}>
        <img
          /* src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/hands-illustration_2x_i9brbn.png"*/
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1616431810/payqin/website/3_gqdoac.png"
          alt="Physical image"
        />
      </div>
    </div>
  );
};

export default Physical;
