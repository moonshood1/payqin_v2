import Footer from "./Components/utils/Footer";
import Navbar from "./Components/utils/Navbar";
import HomeProduct from "./Components/utils/views/HomeProduct";
import HomeDev from "./Components/utils/views/HomeDev";
import HomePricing from "./Components/utils/views/HomePricing";
import { HashRouter, Route, Switch } from "react-router-dom";
import MobileNavbar from "./Components/contents/mobile_version/MobileNavbar";
import MobileFooter from "./Components/contents/mobile_version/MobileFooter";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <MobileNavbar />
        <div className="app_content">
          <Switch>
            <Route path="/developpers" component={HomeDev}></Route>
            <Route path="/pricing" component={HomePricing}></Route>
            <Route path="/" component={HomeProduct}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
// Ajouter le rooter ici , qui va pointer vers une principale (product), modifier App en grid puis fixer le footer tout en bas des rows
export default App;
