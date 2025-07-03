import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Tambahkan ini
import logo from "../assets/logo-iwan.png";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import FunfactComponent from "../components/FunfactComponent";
import ServiceComponent from "../components/ServiceComponent";
import OurMentorComponent from "../components/OurMentorComponent";
import ContactComponent from "../components/ContactComponent";
import "../index.css";

const Main = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="main-container">
        <Row
          id="main"
          className="main py-2"
          xs={1}
          md={2}
          g={4}
          style={{ minHeight: "100vh", color: "white" }}
        >
          <Col className="mainText text-left align-center">
            <h3>Layanan Pelaporan Kebakaran Hutan Kota Sangatta</h3>
            <h1 className="text-logo">Mengenal BumiBiru</h1>
            <p>
              <strong>BumiBiru </strong> adalah sebuah platform yang digunakan
              untuk melihat kejadian-kejadian kebakaran hutan yang terjadi
              di wilayah Kota Sangatta. BumiBiru hadir sebagai laman pelaporan
              kebakaran hutan yang disajikan secara realtime dan aktual, dengan
              berbagai fitur berita, penanggulangan, dan edukasi dini tentang
              pencegahan kebakaran hutan. Sehingga masyarakat dapat memantau dan
              melihat kejadian kebakaran yang terjadi pada areal Kota Sangatta.
            </p>
            <div className="d-flex mt-3">
              <Link to="/maps" className="me-2 w-30 btn btn-outline-purple">
                Lihat Peta
              </Link>
            </div>
          </Col>
          <Col id="mainImg">
            <img src={logo} alt="Logo BumiBiru" />
          </Col>
        </Row>
        <FunfactComponent />
        <ServiceComponent />
        <OurMentorComponent />
        <ContactComponent />
      </Container>
      <FooterComponent />
    </>
  );
};

export default Main;
