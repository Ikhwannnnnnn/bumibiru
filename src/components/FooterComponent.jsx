import React from "react";
import { Container, Row, Col, Nav, Form, InputGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="p-4">
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 text-light">
          <Col>
            <h6>Seputar Berita</h6>
            <Nav className="d-flex flex-column">
              <a href="https://en.wikipedia.org/wiki/HTML#History" className="nav-link text-light">Berita 1</a>
              <a href="https://en.wikipedia.org/wiki/CSS" className="nav-link text-light">Berita 2</a>
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)#Documentation" className="nav-link text-light">Berita 3</a>
              <a href="https://en.wikipedia.org/wiki/React" className="nav-link text-light" >Berita 4</a>
            </Nav>
          </Col>
          <Col>
            <h6>Jenis lahan</h6>
            <Nav className="d-flex flex-column" >
              <a href="Laravel" className="nav-link text-light"> Vegetasi </a>
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)" className="nav-link text-light"> Gambut </a>
              <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" className="nav-link  text-light" > Tegalan </a>
              <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="nav-link text-light">Titik Panas</a>
            </Nav>
          </Col>
          <Col>
            <h6>Analisis</h6>
            <Nav className="d-flex flex-column">
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" className="nav-link text-light">Phyton</a>
              <a href="https://en.wikipedia.org/wiki/CodeIgniter" className="nav-link text-light">CodeIgniter</a>
              <a href="https://en.wikipedia.org/wiki/R_(programming_language)" className="nav-link text-light">R</a>
              <a href="https://en.wikipedia.org/wiki/TypeScript" className="nav-link text-light"> TypeScript </a>
            </Nav>
          </Col>
          <Col>
            <h6>Contact</h6>
            <p className="my-4">
              <FaPhone size="1rem" className="me-1 text-purple" />
              +6285156443046
            </p>
            <p className="my-4">
              <FaEnvelope size="1rem" className="me-1 text-purple" />
              BumiBiru@example.com
            </p>
            <p className="my-4">
              <FaMapMarker size="1rem" className="me-1 text-purple" /> Sleman,
              DI Yogyakarta 2025 , Indonesia
            </p>
          </Col>
        </Row>
        <h6 className="text-center mt-5 text-light">
          Bumi<span className="text-purple">Biru</span>
        </h6>
        <p className="text-center mt-2 text-light">
          Made With <FaHeart className="text-purple" /> by
          <a className="nav-link text-purple" href="http://github.com/thenabiev" > BumiBiru </a>
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;
