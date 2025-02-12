import './header.css';
import AutContext from '../../store/AutContext';
import { useContext } from 'react';

function Header() {

    const loginContext = useContext(AutContext).login

    return (
        <div className='header'>
            <h2>LIST OR PRODUCTS</h2>
            <p>With description, date and price</p>
            {loginContext && <p>Hola Usuario</p>}
        </div>
    )
}

export default Header;