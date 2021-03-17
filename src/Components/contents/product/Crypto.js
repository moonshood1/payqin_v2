import { useState } from "react";

const Crypto = () => {
  const [id, setId] = useState(3);
  return (
    <div className="product_wrapper bg-dark">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Buy and Sell Crypto</h1>
        <p className="wrapper_text">
          PayQin is the fastest app to convert your money into bitcoin buying
          and selling. We got you covered
        </p>
        <div className="wrapper_buttons">
          <div className="wrapper_button_ios">
            <a href="/appstore">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                className="ios"
              />
            </a>
          </div>
          <div className="wrapper_button_google">
            <a href="/playstore">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Play Store download"
                className="google"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="product_wrapper_right">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/buy-sell-crypto_2x_dvaeaf.png"
          alt="Crypto image"
        />
      </div>
    </div>
  );
};

export default Crypto;
