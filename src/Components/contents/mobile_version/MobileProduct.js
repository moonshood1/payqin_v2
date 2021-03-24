import MNotABank from "./product/M_NotABank";
import MPhysical from "./product/M_Physical";
import MTransfer from "./product/M_Transfer";
import MCrypto from "./product/M_Crypto";
import MCryptoDoc from "./product/M_CryptoDoc";
import MobileFooter from "./MobileFooter";

const MobileProduct = () => {
  return (
    <div className="mobile_product_wrapper">
      <div className="section">
        <MNotABank />
      </div>
      <div className="section">
        <MPhysical />
      </div>
      <div className="section">
        <MTransfer />
      </div>
      <div className="section">
        <MCrypto />
      </div>
      <div className="section">
        <MCryptoDoc />
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileProduct;
