import { useState } from "react";

const Transfer = () => {
  const [id, setId] = useState(2);
  return (
    <div className="transfer_wrapper">
      <div className="transfer_wrapper_left">
        <div className="transfer_wrapper_left_first_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978189/payqin/website/pay-friends_rcmrwj.png"
            alt="Boah Paid Amalaman"
          />
        </div>
        <div className="transfer_wrapper_left_second_section">
          <h1>Pay Business</h1>
          <p>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <div className="transfer_button">
            <button className="transfer_button_learn_more">learn more</button>
          </div>
        </div>
      </div>
      <div className="transfer_wrapper_right">
        <div className="transfer_wrapper_right_first_section">
          <h1>Pay Friends</h1>
          <p>
            A safe and secure environment for your internet transactions
            anywhere in the world
          </p>
          <div className="transfer_button">
            <button className="transfer_button_learn_more">learn more</button>
          </div>
        </div>
        <div className="transfer_wrapper_right_second_section">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978188/payqin/website/pay-business_kl246i.png"
            alt="two communicates"
          />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
