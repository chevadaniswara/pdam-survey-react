import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbarcompo() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>PDAM Basic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/survey">Survey</CustomLink>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">List pertanyaan puas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                List pertanyaan tidak puas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Form alasan</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <Nav.Link className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </Nav.Link>
    )
}

export default Navbarcompo;