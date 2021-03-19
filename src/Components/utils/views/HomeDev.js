import Payment from "../../contents/dev/Payment";
import Sales from "../../contents/dev/Sales";
import Integration from "../../contents/dev/Integration";
import Wordpress from "../../contents/dev/Wordpress";
import ReactFullpage from "@fullpage/react-fullpage";
import MobileDev from "../../contents/mobile_version/MobileDev";

const HomeDev = () => {
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
                    <Payment />
                  </div>
                  <div className="section">
                    <Sales />
                  </div>
                  <div className="section">
                    <Integration />
                  </div>
                  <div className="section">
                    <Wordpress />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
        <div className="mobile_view">
          <MobileDev />
        </div>
      </div>
    </div>
  );
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomeDev;
