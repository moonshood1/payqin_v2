import MobileFooter from "./MobileFooter";
import $ from "jquery";

const MobilePricing = () => {
  return (
    <div className="mobile_pricing_wrapper">
      <div className="mobile_wallet">
        <div className="first">
          <h1 style={{ fontSize: "26px" }}>Get $5 in PayQin Wallet</h1>
          <p style={{ color: "#888888", marginTop: "4%" }}>
            - Virtual Card Funding: 650 XOF On Any Amount
          </p>
          <p style={{ color: "#888888" }}>- Virtual Card Withdrawal: Free</p>
        </div>
        <div className="card_first">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978215/payqin/website/payqin-cc-mockup_maeiax.png"
            alt=""
            height="190"
          />
          <p style={{ marginTop: "4%" }}>
            <b>Price : 10 000 XOF</b>
          </p>
        </div>
        <div className="get_now_button">
          <button>get now</button>
        </div>
      </div>
      <div className="mobile_offer_basic">
        <h1 style={{ fontSize: "26px", paddingTop: "10%", paddingLeft: "7%" }}>
          Basic
        </h1>
        <ul style={{ color: "#888888" }}>
          <li style={{ paddingTop: "3%" }}>€ 0 Monthly Fee</li>
          <li style={{ paddingTop: "3%" }}>Reload The Account - 3.5%</li>
          <li style={{ paddingTop: "3%" }}>Withdrawal - 2%</li>
          <li style={{ paddingTop: "3%" }}>Free Transfer In 4 Countries</li>
        </ul>
        <div className="button_account">
          <button>Create account</button>
        </div>
      </div>
      <div className="mobile_offer_premium">
        <small style={{ color: "white", paddingLeft: "7%" }}>
          <b>€ 12/ Yearly</b>
        </small>
        <h1
          style={{
            fontSize: "26px",
            paddingTop: "10%",
            paddingLeft: "7%",
            color: "white",
          }}
        >
          Basic
        </h1>
        <ul style={{ color: "white" }}>
          <li style={{ paddingTop: "2%" }}>€ 0 Monthly Fee</li>
          <li style={{ paddingTop: "2%" }}>Reload The Account - 3.5%</li>
          <li style={{ paddingTop: "2%" }}>Withdrawal - 2%</li>
          <li style={{ paddingTop: "2%" }}>Free Transfer In 4 Countries</li>
        </ul>
        <div className="button_account">
          <button>Create account</button>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobilePricing;
