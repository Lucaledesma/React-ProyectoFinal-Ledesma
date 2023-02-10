import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import { cartContext } from "../../context/cartContext";
import "./navbar.css";

function NavBar() {

  const { getCantItems } = useContext(cartContext);

  return (
    <nav className="nav-header">
      <Logo titulo="TiendaVirtual"/>
      
      <ul className="nav-menu">
        <NavItem nombre="Deportes" categoria="/category/deportes"/>
        <NavItem nombre="Cooperativo" categoria="/category/cooperativo"/>
        <NavItem nombre="Disparos" categoria="/category/disparos"/>
        <NavItem nombre="Mundo Abierto" categoria="/category/mundoabierto"/>

        {
          (getCantItems() !== 0) && <CartWidget />
        }
      </ul>
    </nav>
  );
}

export default NavBar;
