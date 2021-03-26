import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MIntegration from "./dev/M_Integration";
import MPayment from "./dev/M_Payment";
import MSales from "./dev/M_Sales";
import MWordpress from "./dev/M_Wordpress";
import MobileFooter from "./MobileFooter";

const MobileDev = () => {
  return (
    <div className="mobile_dev_wrapper">
      <Carousel autoPlay={false} axis="vertical">
        <div style={{ height: "700px" }}>
          <MPayment />
        </div>
        <div style={{ height: "700px" }}>
          <MSales />
        </div>
        <div style={{ height: "700px" }}>
          <MIntegration />
        </div>
        <div style={{ height: "700px" }}>
          <MWordpress />
        </div>
      </Carousel>
      <MobileFooter />
    </div>
  );
};

export default MobileDev;
