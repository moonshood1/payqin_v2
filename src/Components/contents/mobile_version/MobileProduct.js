import MobileFooter from "./MobileFooter";

const MobileProduct = () => {
  return (
    <div className="mobile_product_wrapper">
      <div className="notabank">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>We’re not Bank, We’re Better</h1>
          <p style={{ color: "#888888" }}>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978184/payqin/website/person-responsive-holdingphone_qiw6xf.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="sendmoney">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Send Money to Friends</h1>
          <p style={{ color: "#888888", marginTop: "20px" }}>
            You Like It Virtual Or Physical ? We Got Both For You
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/hands-illustration_egcrdr.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="transfer">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Pay Business</h1>
          <p style={{ color: "#888888" }}>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <div className="transfer_button">
            <button>learn more</button>
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978189/payqin/website/pay-friends_rcmrwj.png"
              alt=""
              height="250"
            />
          </div>
        </div>
        <div className="second">
          <h1 style={{ fontSize: "26px" }}>Pay Friends</h1>
          <p style={{ color: "#888888" }}>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <div className="transfer_button">
            <button>learn more</button>
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/pay-business_kl246i.png"
              alt=""
              height="190"
            />
          </div>
        </div>
      </div>
      <div className="crypto">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Buy and Sell Crypto</h1>
          <p style={{ color: "#888888" }}>
            PayQin is the fastest app to convert your money into bitcoin buying
            and selling. We got you covered
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978184/payqin/website/buy-sell-crypto_e9rshf.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="crypto_doc">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>
            Create Your Account and Start Trading
          </h1>
          <p style={{ color: "#888888" }}>
            Ready to Start Trading in Cryptocurrencies in just 10 mins?
          </p>
          <div className="crypto_doc_button">
            <button>Create Account</button>
          </div>
        </div>
        <div className="second">
          <div className="crypto_doc_links">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_kveok0.png"
                alt=""
                style={{ marginRight: "2px" }}
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/Google-CTA_dcj7d0.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileProduct;
