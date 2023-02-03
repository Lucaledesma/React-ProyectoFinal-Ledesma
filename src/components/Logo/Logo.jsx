import { Link } from 'react-router-dom';
import './logo.css';

function Logo ( {titulo} ) {
    return (
        <Link className="logo" to="/">
            <i className="bi bi-controller"></i>
            <h2>{titulo}</h2>
        </Link>  
    );
}

export default Logo;