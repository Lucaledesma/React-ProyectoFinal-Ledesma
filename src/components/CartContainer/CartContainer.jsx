import React, { useContext } from 'react';
import CartList from '../CartList/CartList';
import { cartContext } from '../../context/cartContext';
import "./cartcontainer.css";
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";

import { Link } from 'react-router-dom';

function CartContainer() {

  const { cart, getCantItems, getTotalPriceInCart, clearCart } = useContext(cartContext);

  return (
    <>
      {
        (getCantItems() !== 0) ? 
          <div className='cartContainer'>
            <CartList cart={cart} />
            <div className="cartContainer-acciones">
              <p>El total de tu compra es de ${getTotalPriceInCart()}</p>
              <div className="cartContainer-acciones__btn">
                <ButtonDetalle nombre="Vaciar carrito" onClick={clearCart}></ButtonDetalle>
                <ButtonDetalle nombre="Finalizar Compra" onClick={clearCart}></ButtonDetalle>
              </div>
            </div>
          </div>
        :
          <div className='cartContainer'>
            <h2>No hay items en el carrito.</h2>
            <h3>¡Vuelva al menú para continuar!</h3>
            <Link to="/">
              <ButtonDetalle nombre="Volver al menu"></ButtonDetalle>
            </Link>
          </div>
      }
    </>
  )
}

export default CartContainer;