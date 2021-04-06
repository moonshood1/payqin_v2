import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MNotABank from "./product/M_NotABank";
import MPhysical from "./product/M_Physical";
import MTransfer from "./product/M_Transfer";
import MTransferSecond from "./product/M_TransferSecond";
import MCrypto from "./product/M_Crypto";
import MCryptoDoc from "./product/M_CryptoDoc";
import MobileFooter from "./MobileFooter";

const MobileProduct = () => {
  const handleClick = () => {
    window.open("http://onelink.to/wgx597");
  };
  return (
    <div className="mobile_product_wrapper">
      <Carousel axis="vertical" autoPlay={false}>
        <div style={{ height: "700px" }}>
          <MNotABank />
        </div>
        <div style={{ height: "700px" }}>
          <MPhysical />
        </div>
        <div style={{ height: "700px" }}>
          <MTransfer handleClick={handleClick} />
        </div>
        <div style={{ height: "700px" }}>
          <MTransferSecond handleClick={handleClick} />
        </div>
        <div style={{ height: "700px" }}>
          <MCrypto />
        </div>
        <div style={{ height: "700px" }}>
          <MCryptoDoc handleClick={handleClick} />
        </div>
      </Carousel>
      <MobileFooter />
    </div>
  );
};

export default MobileProduct;
