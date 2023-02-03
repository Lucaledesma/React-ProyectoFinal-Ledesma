import React from 'react';
import "./buttondetalle.css";

function ButtonDetalle( {nombre} ) {
  return (
    <button className="producto-agregar">{nombre}</button>
  )
}

export default ButtonDetalle;