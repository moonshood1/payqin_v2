const MCrypto = () => {
  return (
    <div className="crypto">
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          Achetez et vendez de la cryptomonnaie
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          PayQin est l'application la plus rapide pour convertir votre argent en
          bitcoin. Nous nous couvrons
        </p>
        <div
          className="buttons"
          style={{ marginTop: "5%", display: "flex", paddingLeft: "12%" }}
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
      <div className="second" style={{ marginTop: "10%" }}>
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
