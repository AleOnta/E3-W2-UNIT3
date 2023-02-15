import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BsSearch, BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../imgs/NetflixLogo.svg";

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid className="p-0">
        <Row className="d-flex justify-content-between align-items-center w-100 p-0">
          <Col xs={12} sm={9} className="p-0 navContainer">
            <Navbar.Brand href="#home">
              <Logo id="NavLogo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="NavbarLink">
                  Home
                </Nav.Link>
                <Nav.Link href="#shows" className="NavbarLink active">
                  TV Shows
                </Nav.Link>
                <Nav.Link href="#movies" className="NavbarLink">
                  Movies
                </Nav.Link>
                <Nav.Link href="#added" className="NavbarLink">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#list" className="NavbarLink">
                  My list
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs={12} sm={3} className="d-flex justify-content-around align-items-center mt-4 mt-sm-0 p-0">
            <BsSearch className="NavbarIcon" />
            <div id="NavbarKids">KIDS</div>
            <BsFillBellFill className="NavbarIcon" />
            <BsFillPersonFill className="NavbarIcon" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
