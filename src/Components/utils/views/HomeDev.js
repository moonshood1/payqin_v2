import Payment from "../../contents/dev/Payment";
import Sales from "../../contents/dev/Sales";
import Integration from "../../contents/dev/Integration";
import Wordpress from "../../contents/dev/Wordpress";
import ReactFullpage from "@fullpage/react-fullpage";

const HomeDev = () => {
  return (
    <div className="global_container">
      <div className="global_container_content">
        <ReactFullpage
          scrollingSpeed={1500}
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
    </div>
  );
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomeDev;
