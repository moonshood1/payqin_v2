const Mcreation = () => {
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_wallet">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Get $5 in PayQin Wallet</h1>
          <p style={{ color: "#888888", marginTop: "4%" }}>
            - Virtual Card Funding: 650 XOF On Any Amount
          </p>
          <p style={{ color: "#888888" }}>- Virtual Card Withdrawal: Free</p>
        </div>
        <div className="card_first">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=""
            height="190"
          />
          <p style={{ marginTop: "4%" }}>
            <b>Price : 10 000 XOF</b>
          </p>
        </div>
        <div className="get_now_button">
          <button>get now</button>
        </div>
      </div>
    </div>
  );
};

export default Mcreation;
