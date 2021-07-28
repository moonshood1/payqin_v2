import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MIntegration from "./dev/M_Integration";
import MPayment from "./dev/M_Payment";
import MSales from "./dev/M_Sales";
import MWordpress from "./dev/M_Wordpress";
import MobileFooter from "./MobileFooter";

const MobileDev = () => {
  const handleClick = () => {
    window.open("http://onelink.to/wgx597");
  };
  const openAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.payqin&hl=fr&gl=US"
    );
  };
  const openApple = () => {
    window.open("https://apps.apple.com/fr/app/payqin/id1397872810");
  };
  return (
    <div className="mobile_dev_wrapper">
      <Carousel autoPlay={false} axis="vertical">
        <div style={{ height: "700px" }}>
          <MPayment openAndroid={openAndroid} openApple={openApple} />
        </div>
        <div style={{ height: "700px" }}>
          <MSales openAndroid={openAndroid} openApple={openApple} />
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
