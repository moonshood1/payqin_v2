const MOfferBasic = () => {
  return (
    <div className="creation_container_mobile" style={{ height: "100%" }}>
      <div className="mobile_offer_basic">
        <h1 style={{ fontSize: "26px", paddingTop: "10%", paddingLeft: "7%" }}>
          Basic
        </h1>
        <ul style={{ color: "#888888" }}>
          <li style={{ paddingTop: "3%" }}>€ 0 Frais mensuel</li>
          <li style={{ paddingTop: "3%" }}>Rechargement du compte - 3.5%</li>
          <li style={{ paddingTop: "3%" }}>Retrait - 2%</li>
          <li style={{ paddingTop: "3%" }}>Transferts gratuits vers 4 pays</li>
        </ul>
        <div className="button_account">
          <button>Ouvrir un compte</button>
        </div>
      </div>
    </div>
  );
};

export default MOfferBasic;
