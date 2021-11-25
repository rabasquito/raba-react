import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.scss'

export const NavBar = () => {

    return (
        <header className="header">
            <Link to="/"><h1>LOGO</h1></Link>
            <nav>
                <ul>
                    <li><Link to="/productos/vitaminas">Vitaminas</Link></li>
                    <li><Link to="/productos/quemadores">Quemadores</Link></li>
                    <li><Link to="/productos/bcaa">BCAA</Link></li>
                    <li><Link to="/productos/proteinas">Proteínas</Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

// export default NavBar