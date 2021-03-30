import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mcreation from "./pricing/M_Creation";
import MOfferBasic from "./pricing/M_Offer";
import MOfferPremium from "./pricing/M_OfferPremium";
import MobileFooter from "./MobileFooter";

const MobilePricing = () => {
  const handleClick = () => {
    window.open("http://onelink.to/wgx597");
  };
  return (
    <div className="mobile_pricing_wrapper">
      <Carousel autoPlay={false} axis="vertical">
        <div style={{ height: "700px" }}>
          <Mcreation handleClick={handleClick} />
        </div>
        <div style={{ height: "700px" }}>
          <MOfferBasic handleClick={handleClick} />
        </div>
        <div style={{ height: "700px" }}>
          <MOfferPremium handleClick={handleClick} />
        </div>
      </Carousel>
      <MobileFooter />
    </div>
  );
};

export default MobilePricing;
