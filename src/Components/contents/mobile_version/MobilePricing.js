import Mcreation from "./pricing/M_Creation";
import MOfferBasic from "./pricing/M_Offer";
import MOfferPremium from "./pricing/M_OfferPremium";
import MobileFooter from "./MobileFooter";

const MobilePricing = () => {
  return (
    <div className="mobile_pricing_wrapper">
      <div className="section">
        <Mcreation />
      </div>
      <div className="section">
        <MOfferBasic />
      </div>
      <div className="section">
        <MOfferPremium />
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobilePricing;
