const Mcreation = () => {
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_wallet">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Obtenez $5 dans votre Wallet</h1>
          <p style={{ color: "#888888", marginTop: "4%" }}>
            - Frais recharge carte virtuelle : <b>650 XOF</b> tout montant
          </p>
          <p style={{ color: "#888888" }}>
            - Frais de retrait sur carte virtuelle : <b>Gratuit</b>
          </p>
        </div>
        <div className="card_first">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=""
            height="190"
          />
          <p style={{ marginTop: "4%" }}>
            <b>Prix : 10 000 XOF</b>
          </p>
        </div>
        <div className="get_now_button">
          <button>Obtenir une carte</button>
        </div>
      </div>
    </div>
  );
};

export default Mcreation;
