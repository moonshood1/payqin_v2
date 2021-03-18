const Physical = () => {
  return (
    <div className="product_wrapper bg-dark">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Send Money to Friends</h1>
        <p className="wrapper_text">
          You like it virtual or Physical ? We got both for you
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
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/hands-illustration_2x_i9brbn.png"
          alt="Physical image"
        />
      </div>
    </div>
  );
};

export default Physical;
