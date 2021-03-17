import { useState } from "react";

const Sales = () => {
  const [id, setId] = useState(1);
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Track Your Sales in Africa</h1>
        <p className="wrapper_text">
          Weekly detailed sales reports, real-time sales figures and best seller
          reports.
        </p>
      </div>
      <div
        className="product_wrapper_right"
        style={{ marginTop: "50px", marginLeft: "50px" }}
      >
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978216/payqin/website/track-sales_vngpvr.png"
          alt="phone with parameters"
          height="400"
        />
      </div>
    </div>
  );
};

export default Sales;
