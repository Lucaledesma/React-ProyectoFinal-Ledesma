import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-header">
      <Logo titulo="TiendaVirtual"/>
      
      <ul className="nav-menu">
        <NavItem nombre="Deportes" categoria="/category/deportes"/>
        <NavItem nombre="Cooperativo" categoria="/category/cooperativo"/>
        <NavItem nombre="Disparos" categoria="/category/disparos"/>
        <NavItem nombre="Mundo Abierto" categoria="/category/mundoabierto"/>

        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
