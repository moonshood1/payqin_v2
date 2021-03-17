import { useState } from "react";

const Creation = () => {
  const [id, setId] = useState(0);
  return (
    <div className="pricing_wrapper">
      <div></div>
      <div className="pricing_content">
        <div className="pricing_content_left">
          <h1>Get $5 in PayQin Wallet</h1>
          <p>- Virtual Card funding: 650 XOF on any amount</p>
          <p>- Virtual card withdrawal: Free</p>
          <div className="pricing_button_get_now">
            <button className="get_now_button">get now</button>
          </div>
        </div>
        <div className="pricing_content_right">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=" a payqin card"
            width="400"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Creation;
