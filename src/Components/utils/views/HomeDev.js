import { useState } from "react";
import Payment from "../../contents/dev/Payment";
import Sales from "../../contents/dev/Sales";
import Integration from "../../contents/dev/Integration";
import Wordpress from "../../contents/dev/Wordpress";
import DataStructure from "../DataStructure";

const HomeDev = () => {
  const [dev_data, setContent] = useState([
    { id: 0, content: <Payment /> },
    { id: 1, content: <Sales /> },
    { id: 2, content: <Integration /> },
    { id: 3, content: <Wordpress /> },
  ]);
  return <DataStructure data={dev_data.filter((data) => data.id == 2)} />;
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomeDev;
