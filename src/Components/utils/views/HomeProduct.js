import { useState } from "react";
import NotABank from "../../contents/product/NotABank";
import Physical from "../../contents/product/Physical";
import Transfer from "../../contents/product/Transfer";
import Crypto from "../../contents/product/Crypto";
import CryptoDoc from "../../contents/product/CryptoDoc";
import DataStructure from "../DataStructure";
import ReactFullpage from "@fullpage/react-fullpage";

const HomeProduct = () => {
  return (
    <div className="global_container">
      <div className="global_container_content">
        <ReactFullpage
          scrollingSpeed={1500}
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
                  <Transfer />
                </div>
                <div className="section">
                  <Crypto />
                </div>
                <div className="section">
                  <CryptoDoc />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  );
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomeProduct;
