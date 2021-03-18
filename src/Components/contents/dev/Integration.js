const Payment = () => {
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Integrate the PayQin Payment Method</h1>
        <p className="wrapper_text">
          Integrate our Payment Method to reach out Million Users in Multiple
          Countries
        </p>
        <div className="wrapper_links">
          <button className="api_doc_button">api documentation</button>
        </div>
      </div>
      <div className="product_wrapper_right pay" style={{ marginTop: "50px" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/API-Illustration_kqv6dk.png"
          alt=" two talking about api"
          height="400"
        />
      </div>
    </div>
  );
};

export default Payment;
