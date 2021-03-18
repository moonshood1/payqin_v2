const NotABank = () => {
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">We’re not a Bank, We’re better</h1>
        <p className="wrapper_text">
          A safe and secure environment for your internet transactions anywhere
          in the world
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
      <div className="product_wrapper_right" style={{ marginTop: "3%" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/person-holding-phone_ag0pqs.png"
          alt="Not a Bank image"
        />
      </div>
    </div>
  );
};

export default NotABank;
