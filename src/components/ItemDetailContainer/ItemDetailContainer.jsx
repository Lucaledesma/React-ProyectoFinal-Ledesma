import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../data/asyncMockPromise";
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import "./itemdetailcontainer.css";

import { Link } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  let {itemid} = useParams();

  const { addItem } = useContext(cartContext); //removeItem

  function handleAddToCart(count) {
    // alert(`Agregaste ${producto.titulo} (Cantidad = ${count}) al carrito`);
    // producto.cantidad = count;
    addItem(producto, count);
  }

  useEffect(() => {
    getSingleItem(itemid)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        alert(`Error: ${error}`)
      });
  }, [itemid]);

  return (
    <div className="card-detail_main">

      <div className="card-detail_img">
        <img src={producto.imagen} alt={producto.titulo}></img>
      </div>

      <div className="card-right">
        <div className="card-detail_detail">
          <h1>{producto.titulo}</h1>
          <h2 className="priceTag">$ {producto.precio}</h2>
          <h3>Stock disponible: {producto.stock}</h3>
          <small>{producto.detalle}</small>
        </div>

        <ItemCount onAddToCart={handleAddToCart} stockDisponible={producto.stock} />

        <Link to="/cart">
            <ButtonDetalle nombre="Ir al Carrito"></ButtonDetalle>
        </Link>
      </div>

    </div>
  );
}

export default ItemDetailContainer;