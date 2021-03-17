import { useState } from "react";

const Offer = () => {
  const [id, setId] = useState(1);
  return (
    <div className="pricing_wrapper">
      <div></div>
      <div className="pricing_offer_content">
        <div className="offer_content_left">
          <small>
            <b>free</b>
          </small>
          <h2>Basic</h2>
          <ul>
            <li>€ 0 Monthly Fee</li>
            <li>Reload The Account - 3.5%</li>
            <li>Withdrawal - 2%</li>
            <li>Free Transfer In 4 Countries</li>
          </ul>
          <div className="offer_button_container">
            <button className="offer_button">Open Account</button>
          </div>
        </div>
        <div></div>
        <div className="offer_content_right">
          <small>
            <b>€ 12/ Yearly</b>
          </small>
          <h2>Premium</h2>
          <ul>
            <li>€ 0 Monthly Fee</li>
            <li>Reload The Account - 3.5%</li>
            <li>Withdrawal - 2%</li>
            <li>3 Year Master card Limit</li>
          </ul>
          <div className="offer_button_container">
            <button className="offer_button">Open Account</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Offer;
