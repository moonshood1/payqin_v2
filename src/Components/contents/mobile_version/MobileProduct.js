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
  return (
    <div className="mobile_product_wrapper">
      <Carousel autoPlay={false} axis="vertical">
        <div style={{ height: "432px" }}>
          <MNotABank />
        </div>
        <div style={{ height: "432px" }}>
          <MPhysical />
        </div>
        <div style={{ height: "432px" }}>
          <MTransfer />
        </div>
        <div style={{ height: "432px" }}>
          <MTransferSecond />
        </div>
        <div style={{ height: "432px" }}>
          <MCrypto />
        </div>
        <div style={{ height: "432px" }}>
          <MCryptoDoc />
        </div>
      </Carousel>
      <MobileFooter />
    </div>
  );
};

export default MobileProduct;
