import { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/utils/Navbar";
import MobileNavbar from "./Components/contents/mobile_version/MobileNavbar";
import HomeProduct from "./Components/utils/views/HomeProduct";
import HomeDev from "./Components/utils/views/HomeDev";
import HomePricing from "./Components/utils/views/HomePricing";
import Footer from "./Components/utils/Footer";
import Modal from "./Components/utils/Modal";
import Overlay from "./Components/utils/Overlay";
import Dropdown from "./Components/utils/Dropdown";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <Navbar
          showModal={showModal}
          setShowModal={setShowModal}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <Dropdown
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <MobileNavbar
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="app_content">
          <Switch>
            <Route path="/developpers">
              <HomeDev />
            </Route>
            <Route path="/pricing">
              <HomePricing />
            </Route>
            <Route path="/">
              <HomeProduct />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
// Ajouter le rooter ici , qui va pointer vers une principale (product), modifier App en grid puis fixer le footer tout en bas des rows
export default App;
