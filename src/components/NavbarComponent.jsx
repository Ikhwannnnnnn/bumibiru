import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo-iwan.png";

function NavbarComponent() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          collapseOnSelect
          fixed="top"
          key={expand}
          variant="dark"
          expand={expand}
          className="mb-3 navbarComponent"
        >
          <Container>
            <Navbar.Brand
              className="d-flex align-items-center ms-md-2"
              href="#main"
            >
              <img src={logo} alt="Logo Website" className="logo-navbar me-2" />
              <h2 className="mb-0">
                {" "}
                Bumi<span className="text-logo">Biru</span>
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="bg-dark text-light"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#main">
                    <strong>Beranda</strong>
                  </Nav.Link>
                  <Nav.Link href="#funfact">
                    <strong>Informasi</strong>
                  </Nav.Link>
                  <Nav.Link href="#services">
                    <strong>Layout Peta</strong>
                  </Nav.Link>
                  <Nav.Link href="#our_mentor">
                    <strong>Berita</strong>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <strong>tentang</strong>
                  </Nav.Link>
                  <Nav.Link href="/maps">
                    <strong>maps</strong>
                  </Nav.Link>
                  <Nav.Link
                    className="contact-button"
                    href="http://lapor-bumibiru.web.id/login"
                  >
                    <strong className="text-light">Masuk/Lapor</strong>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
