import MIntegration from "./dev/M_Integration";
import MPayment from "./dev/M_Payment";
import MSales from "./dev/M_Sales";
import MWordpress from "./dev/M_Wordpress";
import MobileFooter from "./MobileFooter";

const MobileDev = () => {
  return (
    <div className="mobile_dev_wrapper">
      <div className="section">
        <MPayment />
      </div>
      <div className="section">
        <MSales />
      </div>
      <div className="section">
        <MIntegration />
      </div>
      <div className="section">
        <MWordpress />
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileDev;
