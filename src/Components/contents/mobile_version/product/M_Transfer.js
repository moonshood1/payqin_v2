const MTransfer = () => {
  return (
    <div className="transfer">
      <div className="first">
        <h1 style={{ fontSize: "26px" }}>Pay Business</h1>
        <p style={{ color: "#888888" }}>
          A safe and secure environment for your internet transactions anywhere
          in the world
        </p>
        <div className="transfer_button">
          <button>learn more</button>
        </div>
        <div className="img">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978189/payqin/website/pay-friends_rcmrwj.png"
            alt=""
            height="250"
          />
        </div>
      </div>
      <div className="second">
        <h1 style={{ fontSize: "26px" }}>Pay Friends</h1>
        <p style={{ color: "#888888" }}>
          A safe and secure environment for your internet transactions anywhere
          in the world
        </p>
        <div className="transfer_button">
          <button>learn more</button>
        </div>
        <div className="img">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/pay-business_kl246i.png"
            alt=""
            height="190"
          />
        </div>
      </div>
    </div>
  );
};

export default MTransfer;
