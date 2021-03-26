const MIntegration = () => {
  return (
    <div className="default_payment" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "10%" }}>
          Integrez la méthode de paiement PayQin
        </h1>
        <p style={{ color: "#888888", marginTop: "5%" }}>
          Integrez notre méthode de paiement pour atteindre des millions
          d'utilisateurs dans plusieurs pays
        </p>
      </div>
      <div className="second" style={{ marginTop: "7%" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/API-Illustration_kqv6dk.png"
          alt=""
          height="200"
        />
      </div>
      <div className="default_button">
        <button className="api">api documentation</button>
      </div>
    </div>
  );
};

export default MIntegration;
