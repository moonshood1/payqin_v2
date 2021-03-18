const CryptoDoc = () => {
  return (
    <div className="crypto_doc_wrapper">
      <div className="crypto_doc_first_section">
        <h1>Create Your Account and Start Trading</h1>
        <p>Ready to Start Trading in Cryptocurrencies in just 10 mins?</p>
        <div className="button_container">
          <button className="crypto_doc_link_create">Create account</button>
        </div>
      </div>
      <div className="crypto_doc_buttons">
        <div className="crypto_doc_buttons_ios">
          <a href="/appstore">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
              alt="app store"
              className="ios"
            />
          </a>
        </div>
        <div className="crypto_doc_buttons_google">
          <a href="/playstore">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
              alt="google play"
              className="google"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoDoc;
