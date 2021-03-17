import { useState } from "react";
import Creation from "../../contents/pricing/Creation";
import Offer from "../../contents/pricing/Offer";
import DataStructure from "../DataStructure";

const HomePricing = () => {
  const [pricing_data, setData] = useState([
    { id: 0, content: <Creation /> },
    { id: 1, content: <Offer /> },
  ]);
  return <DataStructure data={pricing_data.filter((data) => data.id == 0)} />;
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomePricing;
