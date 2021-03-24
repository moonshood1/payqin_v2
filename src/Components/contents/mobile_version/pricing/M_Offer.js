const MOfferBasic = () => {
  return (
    <div className="mobile_offer_basic">
      <h1 style={{ fontSize: "26px", paddingTop: "10%", paddingLeft: "7%" }}>
        Basic
      </h1>
      <ul style={{ color: "#888888" }}>
        <li style={{ paddingTop: "3%" }}>€ 0 Monthly Fee</li>
        <li style={{ paddingTop: "3%" }}>Reload The Account - 3.5%</li>
        <li style={{ paddingTop: "3%" }}>Withdrawal - 2%</li>
        <li style={{ paddingTop: "3%" }}>Free Transfer In 4 Countries</li>
      </ul>
      <div className="button_account">
        <button>Create account</button>
      </div>
    </div>
  );
};

export default MOfferBasic;
