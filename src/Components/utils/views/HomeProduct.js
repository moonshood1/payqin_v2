import { useState } from "react";
import NotABank from "../../contents/product/NotABank";
import Physical from "../../contents/product/Physical";
import Transfer from "../../contents/product/Transfer";
import Crypto from "../../contents/product/Crypto";
import CryptoDoc from "../../contents/product/CryptoDoc";
import DataStructure from "../DataStructure";
import ReactFullpage from "@fullpage/react-fullpage";
import MobileProduct from "../../contents/mobile_version/MobileProduct";

const HomeProduct = ({ showModal, setShowModal }) => {
  return (
    <div className="global_container">
      <div className="global_container_content">
        <div className="web_view">
          <ReactFullpage
            scrollingSpeed={1500}
            navigation={true}
            navigationPosition="right"
            dragAndMove={true}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <NotABank />
                  </div>
                  <div className="section">
                    <Physical />
                  </div>
                  <div className="section">
                    <Transfer
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <div className="section">
                    <Crypto />
                  </div>
                  <div className="section">
                    <CryptoDoc
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
        <div className="mobile_view">
          <MobileProduct />
        </div>
      </div>
    </div>
  );
};
export default HomeProduct;
