import Footer from "./Components/utils/Footer";
import Navbar from "./Components/utils/Navbar";
import HomeProduct from "./Components/utils/views/HomeProduct";
import HomeDev from "./Components/utils/views/HomeDev";
import HomePricing from "./Components/utils/views/HomePricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_content">
        <HomePricing />
      </div>
      <Footer />
    </div>
  );
}
// Ajouter le rooter ici , qui va pointer vers une principale (product)
export default App;
