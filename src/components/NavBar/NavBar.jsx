import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import { cartContext } from "../../context/cartContext";
import "./navbar.css";

function NavBar() {

  const { clearCart } = useContext(cartContext);

  return (
    <nav className="nav-header">
      <Logo titulo="TiendaVirtual"/>
      
      <ul className="nav-menu">
        <NavItem nombre="Deportes" categoria="/category/deportes"/>
        <NavItem nombre="Cooperativo" categoria="/category/cooperativo"/>
        <NavItem nombre="Disparos" categoria="/category/disparos"/>
        <NavItem nombre="Mundo Abierto" categoria="/category/mundoabierto"/>

        <CartWidget />

        <button className="btn-vaciar" onClick={ clearCart }>Vaciar Carrito</button>
      </ul>
    </nav>
  );
}

export default NavBar;
