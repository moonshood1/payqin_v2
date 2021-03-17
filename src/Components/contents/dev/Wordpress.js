import { useState } from "react";

const Wordpress = () => {
  const [id, setId] = useState(3);
  return (
    <div
      className="crypto_doc_wrapper"
      style={{ background: "#F9F9F9", height: "600px" }}
    >
      <div className="crypto_doc_first_section">
        <h1>Wordpress Plugin</h1>
        <p>Catchy Tagline to download Wordpress plugin</p>
        <div className="button_container">
          <button className="crypto_doc_link_create">Download plugin</button>
        </div>
      </div>
    </div>
  );
};

export default Wordpress;
