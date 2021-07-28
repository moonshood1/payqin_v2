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
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const TraductionLinks = () => {
    const { t, i18n } = useTranslation("common");
    return (
      <div className="translations_buttons">
        <a href="#">
          <img
            onClick={() => i18n.changeLanguage("fr")}
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280731/main%20website/Screenshot_316_ljuop5_lph570.png"
            alt=""
            height="16"
          />
        </a>
        <a href="#">
          <img
            onClick={() => i18n.changeLanguage("en")}
            src="https://res.cloudinary.com/payqin-ltd/image/upload/v1626280725/main%20website/Screenshot_317_gigu9b_otg3wr.png"
            alt=""
            height="16"
          />
        </a>
      </div>
    );
  };

  return (
    <Suspense fallback="Loading ...">
      <HashRouter>
        <div className="App">
          <Navbar
            TraductionLinks={TraductionLinks}
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
            TraductionLinks={TraductionLinks}
          />
          <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className="app_content">
            <Switch>
              <Route path="/developpers">
                <HomeDev />
              </Route>
              <Route path="/pricing">
                <HomePricing
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Route>
              <Route path="/">
                <HomeProduct
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </Suspense>
  );
}
export default App;
