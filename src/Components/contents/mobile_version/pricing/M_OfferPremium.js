const MOfferPremium = () => {
  return (
    <div className="mobile_offer_premium">
      <small style={{ color: "white", paddingLeft: "7%" }}>
        <b>€ 12/ Yearly</b>
      </small>
      <h1
        style={{
          fontSize: "26px",
          paddingTop: "10%",
          paddingLeft: "7%",
          color: "white",
        }}
      >
        Basic
      </h1>
      <ul style={{ color: "white" }}>
        <li style={{ paddingTop: "2%" }}>€ 0 Monthly Fee</li>
        <li style={{ paddingTop: "2%" }}>Reload The Account - 3.5%</li>
        <li style={{ paddingTop: "2%" }}>Withdrawal - 2%</li>
        <li style={{ paddingTop: "2%" }}>Free Transfer In 4 Countries</li>
      </ul>
      <div className="button_account">
        <button>Create account</button>
      </div>
    </div>
  );
};

export default MOfferPremium;
