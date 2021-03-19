import MobileFooter from "./MobileFooter";

const MobileDev = () => {
  return (
    <div className="mobile_dev_wrapper">
      <div className="default_payment" style={{ marginBottom: "4%" }}>
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Send and Receive Online Payment</h1>
          <p style={{ color: "#888888", marginTop: "2%" }}>
            Sell Online In African Currencies With Our Checkout. Implement Our
            Checkout And Start Selling
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/send-receive_pd1wb9.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="default_payment bg" style={{ marginBottom: "4%" }}>
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Track Your Sales in Africa</h1>
          <p style={{ color: "#888888", marginTop: "2%" }}>
            Weekly Detailed Sales Reports, Real-Time Sales Figures And Best
            Seller Reports.
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/track-sales_vngpvr.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="default_payment" style={{ marginBottom: "4%" }}>
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>
            Integrate the PayQin Payment Method
          </h1>
          <p style={{ color: "#888888", marginTop: "2%" }}>
            Intergrate our Payment Method to reach out Million Users in Multiple
            Countries
          </p>
        </div>
        <div className="second">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/API-Illustration_kqv6dk.png"
            alt=""
            height="200"
          />
        </div>
        <div className="default_button">
          <button className="api">api documentation</button>
        </div>
      </div>
      <div className="default_payment bg">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Wordpress Plugin</h1>
          <p style={{ color: "#888888", marginTop: "2%" }}>
            Catchy Tagline to download Wordpress plugin
          </p>
          <div className="default_button_wordpress">
            <button className="wordpress">Download plugin</button>
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileDev;
