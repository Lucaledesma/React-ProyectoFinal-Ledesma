import { Link } from 'react-router-dom';
import './cartwidget.css';

function CartWidget () {
    return (
        <Link className="link-carrito" to="/">
            <i className="bi bi-cart-fill"></i>
        </Link>
    );
}

export default CartWidget;