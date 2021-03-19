import Creation from "../../contents/pricing/Creation";
import Offer from "../../contents/pricing/Offer";
import DataStructure from "../DataStructure";
import ReactFullpage from "@fullpage/react-fullpage";
import MobilePricing from "../../contents/mobile_version/MobilePricing";

const HomePricing = () => {
  return (
    <div className="global_container">
      <div className="global_container_content">
        <div className="web_view">
          <ReactFullpage
            scrollingSpeed={1500}
            navigation={true}
            navigationPosition="right"
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Creation />
                  </div>
                  <div className="section">
                    <Offer />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
        <div className="mobile_view">
          <MobilePricing />
        </div>
      </div>
    </div>
  );
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomePricing;
