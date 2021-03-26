const MOfferPremium = () => {
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
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
          <li style={{ paddingTop: "2%" }}>€ 0 Frais mensuel</li>
          <li style={{ paddingTop: "2%" }}>Rechargement du compte - 3.5%</li>
          <li style={{ paddingTop: "2%" }}>Retrait - 2%</li>
          <li style={{ paddingTop: "2%" }}>
            Une Mastercard d'une durée de 3 ans
          </li>
        </ul>
        <div className="button_account">
          <button>Create account</button>
        </div>
      </div>
    </div>
  );
};

export default MOfferPremium;
