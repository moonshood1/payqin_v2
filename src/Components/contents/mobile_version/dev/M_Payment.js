const MPayment = () => {
  return (
    <div
      className="default_payment"
      style={{ marginBottom: "4%" }}
      style={{ height: "100%" }}
    >
      <div className="first">
        <h1 style={{ fontSize: "26px" }}>Send and Receive Online Payment</h1>
        <p style={{ color: "#888888", marginTop: "2%" }}>
          Sell Online In African Currencies With Our Checkout. Implement Our
          Checkout And Start Selling
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
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/send-receive_pd1wb9.png"
          alt=""
          height="200"
        />
      </div>
    </div>
  );
};

export default MPayment;
