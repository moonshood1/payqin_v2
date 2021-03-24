const MCrypto = () => {
  return (
    <div className="crypto">
      <div className="first">
        <h1 style={{ fontSize: "26px" }}>Buy and Sell Crypto</h1>
        <p style={{ color: "#888888" }}>
          PayQin is the fastest app to convert your money into bitcoin buying
          and selling. We got you covered
        </p>
        <div
          className="buttons"
          style={{ marginTop: "3%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <a href="/appstore">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </a>
          </div>
          <div className="butt_google">
            <a href="/googleplay">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="second">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978184/payqin/website/buy-sell-crypto_e9rshf.png"
          alt=""
          height="250"
        />
      </div>
    </div>
  );
};

export default MCrypto;
