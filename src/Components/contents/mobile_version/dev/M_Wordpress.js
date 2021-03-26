const MWordpress = () => {
  return (
    <div className="default_payment bg" style={{ height: "100%" }}>
      <div className="first" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "26px", marginTop: "15%" }}>Plugin Wordpress</h1>
        <p style={{ color: "#888888", marginTop: "2%" }}>
          Télechargez le plugin wordpress pour intégrer PayQin comme moyen de
          Paiement sur vos sites
        </p>
        <div className="default_button_wordpress">
          <button className="wordpress">
            <i class="fab fa-wordpress"></i> Télécharger le plugin
          </button>
        </div>
      </div>
    </div>
  );
};

export default MWordpress;
