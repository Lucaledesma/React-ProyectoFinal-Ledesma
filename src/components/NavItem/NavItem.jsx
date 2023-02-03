import { Link } from 'react-router-dom';
import './navitem.css';

function NavItem( {nombre, categoria} ) {
    return (
        <li className="nav-item">
          <Link className="nav-link" to={categoria}>
            {nombre}
          </Link>
        </li>
    );
}

export default NavItem;