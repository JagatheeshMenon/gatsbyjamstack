import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'gatsby'

const Header = (props) => (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Static Blog Post</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </React.Fragment>
);
export default Header;

/*const Header = (props) => (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Static Blog Post</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
                <Nav.Link as={Link} to ="/Aboutme/">About me</Nav.Link>
                <Nav.Link as={Link} to ="/Contactme/">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </React.Fragment>
);
export default Header;*/