import { CartWidget } from '../CartWidget/CartWidget';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
     /*
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
        </header>*/

    return (
        
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">SupleUy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/productos/vitaminas">Vitaminas</Nav.Link>
            <Nav.Link href="/productos/quemadores">Quemadores</Nav.Link>
            <Nav.Link href="/productos/bcaa">BCAA</Nav.Link>
            <Nav.Link href="/productos/proteinas">Proteínas</Nav.Link>
          </Nav>
          <CartWidget/>
          </Container>
        </Navbar>
       
    )
}

// export default NavBar