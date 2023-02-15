import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BsSearch, BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../imgs/NetflixLogo.svg";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid className="p-0">
        <Row className="d-flex justify-content-between align-items-center w-100 p-0">
          <Col xs={12} sm={9} className="p-0 navContainer">
            <Link to="/home" className="navbar-brand">
              <Logo id="NavLogo" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/home"
                  className={`NavbarLink nav-link nav-link ${location.pathname === "/home" ? "active" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/TvShows"
                  className={`NavbarLink nav-link ${location.pathname === "/TvShows" ? "active" : ""}`}
                >
                  TV Shows
                </Link>
                <Link to="/movies" className={`NavbarLink nav-link ${location.pathname === "/movies" ? "active" : ""}`}>
                  Movies
                </Link>
                <Link
                  to="/recently"
                  className={`NavbarLink nav-link ${location.pathname === "/recently" ? "active" : ""}`}
                >
                  Recently Added
                </Link>
                <Link to="/myList" className={`NavbarLink nav-link ${location.pathname === "/myList" ? "active" : ""}`}>
                  My list
                </Link>
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
