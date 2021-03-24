const MCryptoDoc = () => {
  return (
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
              height="45px"
              style={{ marginRight: "8px" }}
            />
          </a>
          <a href="#">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/Google-CTA_dcj7d0.png"
              alt=""
              height="45px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MCryptoDoc;
