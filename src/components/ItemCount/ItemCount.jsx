import React from 'react';
import './itemcount.css';

function ItemCount( {stockDisponible} ) {
  const [cant, setCant] = React.useState(1);

  function sumar() {
    if (cant < Number(`${stockDisponible}`)) {
      setCant(cant + 1);
    }
  }

  function restar() {
    if (cant > 1) {
      setCant(cant - 1);
    }
  }

  return (
    <div className="container">
      <button onClick={restar} className="btnRestar">
        -
      </button>
      <span className="numero"> {cant} </span>
      <button onClick={sumar} className="btnSumar">
        +
      </button>
    </div>
  );
}

export default ItemCount;