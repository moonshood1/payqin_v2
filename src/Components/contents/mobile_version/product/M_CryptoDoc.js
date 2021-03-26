const MCryptoDoc = () => {
  return (
    <div className="crypto_doc">
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          Créer un compte et commencez à trader
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          Prêt à commencer à trader en cryptomonnaie en Juste 10 minutes ?
        </p>
        <div className="crypto_doc_button" style={{ marginTop: "10%" }}>
          <button>Ouvrir un compte</button>
        </div>
      </div>
      <div className="second" style={{ marginTop: "10%" }}>
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
