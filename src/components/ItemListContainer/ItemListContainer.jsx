import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems, {getItemsByCategory} from "../../data/asyncMockPromise";
import ItemList from "../ItemList/ItemList";
import './itemlistcontainer.css';

function ItemListContainer () {

    const [productos, setProductos] = useState([]);
  
    let {categoryid} = useParams();

    useEffect(() => {
      if (categoryid) {
        getItemsByCategory(categoryid).then((response) => {
          setProductos(response);
        });
      } else {
        getItems().then((response) => {
          setProductos(response);
        });
      }
    }, [categoryid]);
  
    return (
      <>
        <ItemList productos={productos} />
      </>
    );
}

export default ItemListContainer;