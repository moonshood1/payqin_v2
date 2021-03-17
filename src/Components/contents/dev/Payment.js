import { useState } from "react";

const Payment = () => {
  const [id, setId] = useState(0);
  return (
    <div className="product_wrapper">
      <div className="product_wrapper_left">
        <h1 className="wrapper_title">Send and Receive Online Payment</h1>
        <p className="wrapper_text">
          Sell online in African currencies with our Checkout. Implement our
          checkout and start selling
        </p>
      </div>
      <div className="product_wrapper_right" style={{ marginTop: "50px" }}>
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978217/payqin/website/send-receive_2x_s9usca.png"
          alt="a laying phone"
          height="400"
        />
      </div>
    </div>
  );
};

export default Payment;
