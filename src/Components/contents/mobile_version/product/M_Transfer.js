const MTransfer = () => {
  return (
    <div className="transfer" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>Pay Business</h1>
        <p style={{ color: "#888888" }}>
          Un environnement fiable et securisé pour vos transactions internet
          partout dans le monde
        </p>
        <div
          className="transfer_button"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <button>En savoir plus</button>
        </div>
        <div className="img" style={{ marginTop: "15%" }}>
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978189/payqin/website/pay-friends_rcmrwj.png"
            alt=""
            height="250"
          />
        </div>
      </div>
    </div>
  );
};

export default MTransfer;
