import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss'

export const NavBar = () => {

    return (
        <header className="header">
            <h1>LOGO</h1>

            <nav>
                <ul>
                    <li>Pag1</li>
                    <li>Pag2</li>
                    <li>Pag3</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

// export default NavBar