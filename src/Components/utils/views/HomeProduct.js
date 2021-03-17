import { useState } from "react";
import NotABank from "../../contents/product/NotABank";
import Physical from "../../contents/product/Physical";
import Transfer from "../../contents/product/Transfer";
import Crypto from "../../contents/product/Crypto";
import CryptoDoc from "../../contents/product/CryptoDoc";
import DataStructure from "../DataStructure";

const HomeProduct = () => {
  const [product_data, setData] = useState([
    { id: 0, content: <NotABank /> },
    { id: 1, content: <Physical /> },
    { id: 2, content: <Transfer /> },
    { id: 3, content: <Crypto /> },
    { id: 4, content: <CryptoDoc /> },
  ]);
  /* const handleClick = () => {
    setData("bonjour la populace");
  }; */
  return <DataStructure data={product_data.filter((data) => data.id == 4)} />;
};
// Ajouter un container dans le home qui va recevoir un element dont le state change a chaque fois qu'on clique ou scroll la page
export default HomeProduct;
