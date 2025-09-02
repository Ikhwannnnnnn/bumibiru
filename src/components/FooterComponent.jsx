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
              <a href="https://bujurnews.com/2023/09/06/bpbd-kutim-padamkan-karhutla-di-3-titik-kecamatan-sangatta-utara/?utm_source=chatgpt.com" className="nav-link text-light">Berita 1</a>
              <a href="https://kaltim.indeksmedia.id/bikin-panik-warga-sangatta-kutim-kebakaran-lahan-terjadi-dekat-pemukiman/?utm_source=chatgpt.com" className="nav-link text-light">Berita 2</a>
              <a href="https://www.jejakkhatulistiwa.co.id/antisipasi-kebakaran-hutan-dan-lahan-babinsa-sangatta-selatan-lancaran-patroli/?utm_source=chatgpt.com" className="nav-link text-light">Berita 3</a>
              <a href="https://www.youtube.com/watch?v=sRatYlwRdG0" className="nav-link text-light" >Berita 4</a>
            </Nav>
          </Col>
          <Col>
            <h6>Jenis lahan</h6>
            <Nav className="d-flex flex-column" >
              <a href="https://www.google.com/search?q=apa+itu+lahan+vegetas&rlz=1C1CHBF_enID1008ID1008&oq=apa+itu+lahan+vegetasi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjIICAIQABgWGB4yCggDEAAYgAQYogQyBwgEEAAY7wUyCggFEAAYgAQYogQyCggGEAAYgAQYogQyCggHEAAYgAQYogTSAQkzMTM5ajBqMTWoAgiwAgHxBbvtKrOiMzSG8QW77SqzojM0hg&sourceid=chrome&ie=UTF-8" className="nav-link text-light"> Vegetasi </a>
              <a href="https://www.google.com/search?q=apa+itu+lahan+gambut&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&ei=jXi0aJ6WH8qf4-EPyobs-Qo&ved=0ahUKEwjekPWjvLWPAxXKzzgGHUoDO68Q4dUDCBE&uact=5&oq=apa+itu+lahan+gambut&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGFwYSBpdHUgbGFoYW4gZ2FtYnV0MgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkijFVAAWIcOcAB4AZABAZgBuAKgAYILqgEHMS44LjAuMbgBA8gBAPgBAZgCCaACqAnCAggQABiABBiiBMICBRAAGO8FmAMA4gMFEgExIECSBwMwLjmgB6E6sgcDMC45uAeoCcIHBTItMy42yAdU&sclient=gws-wiz-serp" className="nav-link text-light"> Gambut </a>
              <a href="https://www.google.com/search?q=apa+itu+lahan+tegalan&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&ei=w3i0aJr8OZiN4-EP__-DmQI&ved=0ahUKEwja6e-9vLWPAxWYxjgGHf__ICMQ4dUDCBE&uact=5&oq=apa+itu+lahan+tegalan&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWFwYSBpdHUgbGFoYW4gdGVnYWxhbjIFEAAYgAQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESIcZULwEWMMXcAJ4AZABAJgBkQGgAecHqgEDNS40uAEDyAEA-AEBmAILoALJCMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEAAYgAQYQxiKBcICBhAAGBYYHsICBxAAGIAEGA2YAwCIBgGQBgqSBwM1LjagB9IksgcDMy42uAezCMIHBTItNi41yAdZ&sclient=gws-wiz-serp" className="nav-link  text-light" > Tegalan </a>
              <a href="https://www.google.com/search?q=apa+itu+titik+panas&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&ei=7Xi0aNGJOpOb4-EP3Ia_gQM&ved=0ahUKEwiRtPPRvLWPAxWTzTgGHVzDLzAQ4dUDCBE&uact=5&oq=apa+itu+titik+panas&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2FwYSBpdHUgdGl0aWsgcGFuYXMyBRAAGIAEMgYQABgWGB4yCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI72xQywRY0ltwBHgBkAEAmAGOA6AB6h2qAQg1LjE3LjEuMrgBA8gBAPgBAZgCG6AC9RzCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBRAhGKABwgIFECEYnwXCAgcQIRigARgKwgIEECEYFcICBxAAGIAEGA2YAwCIBgGQBgiSBwo3LjE3LjEuMS4xoAftYbIHCjMuMTcuMS4xLjG4B9UcwgcIMC4zLjIyLjLIB5MB&sclient=gws-wiz-serp" className="nav-link text-light">Titik Panas</a>
            </Nav>
          </Col>
          <Col>
            <h6>Analisis</h6>
            <Nav className="d-flex flex-column">
              <a href="https://www.google.com/search?q=apa+itu+Metode+Clustering&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&ei=Cnm0aKSGGfzBjuMPrcOQ2AI&ved=0ahUKEwiks7zfvLWPAxX8oGMGHa0hBCsQ4dUDCBE&uact=5&oq=apa+itu+Metode+Clustering&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFwYSBpdHUgTWV0b2RlIENsdXN0ZXJpbmcyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEidOVDoBFjzN3ADeACQAQGYAdEEoAHBKqoBDDUuMTEuNC4yLjIuMbgBA8gBAPgBAZgCGqAC4ijCAggQABiABBiwA8ICCBAAGLADGO8FwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgIQEAAYgAQYsQMYgwEYigUYCsICDhAAGIAEGLEDGIMBGIoFwgIFEAAY7wXCAgcQABiABBgNwgIGEAAYDRgemAMAiAYBkAYDkgcMNi4xMi4zLjEuMy4xoAetgwGyBwwzLjEyLjMuMS4zLjG4B8kowgcHMi0xNi4xMMgHyAE&sclient=gws-wiz-serp" className="nav-link text-light">Apa itu Clustering?</a>
              <a href="https://www.google.com/search?sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&q=apa+itu+metode+tren&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MQRJc_t_TQjwHYrzlkIauOKj9nSuujpEIbB1x32lFLEvK6We0BNFF23ASlj4ZOmJjUjFPnlh4tmc5jD2Yzcyi0WazGnizuS8YgEUPqXL3nNyvdxd_K5qWUghxG-L_bZLoWqIQz6lfBghZi5vMNithI3vNdMrg&sa=X&ved=2ahUKEwiA1JOUvbWPAxXezzgGHbFgCokQ0pQJegQIDRAB&biw=1536&bih=730&dpr=1.25" className="nav-link text-light">Apa itu Tren?</a>
              <a href="https://www.google.com/search?q=Apa+itu+penggunaan+Lahan&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&biw=1536&bih=730&ei=gnm0aOqlGMvv4-EPmt-x0QY&ved=0ahUKEwjq7teYvbWPAxXL9zgGHZpvLGoQ4dUDCBE&uact=5&oq=Apa+itu+penggunaan+Lahan&gs_lp=Egxnd3Mtd2l6LXNlcnAiGEFwYSBpdHUgcGVuZ2d1bmFhbiBMYWhhbjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI7ihQAFi_JnAAeAGQAQCYAeoCoAH6HaoBCDYuMTMuMy4yuAEDyAEA-AEBmAIYoALaH8ICCxAAGIAEGJECGIoFwgIOEC4YgAQYsQMYgwEYigXCAg4QABiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgQQABgDwgILEC4YgAQY0QMYxwHCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAgcQABiABBgKwgIFEAAY7wWYAwCSBwg1LjE0LjMuMqAH96IBsgcINS4xNC4zLjK4B9ofwgcHMi0xMS4xM8gHzgE&sclient=gws-wiz-serp" className="nav-link text-light">Apa itu Penggunaan Lahan?</a>
              <a href="https://www.google.com/search?q=apa+itu+laravel&sca_esv=32c31fc24eb89b34&rlz=1C1CHBF_enID1008ID1008&biw=1536&bih=730&ei=mHm0aIaDGJSw4-EPotSZ6QM&ved=0ahUKEwiGr5ajvbWPAxUU2DgGHSJqJj0Q4dUDCBE&uact=5&oq=apa+itu+laravel&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2FwYSBpdHUgbGFyYXZlbDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIunpQ4z1YrHdwCngBkAEAmAGgAqABixuqAQY4LjExLjW4AQPIAQD4AQGYAiKgAuwdqAISwgIKEAAYsAMY1gQYR8ICCxAAGIAEGJECGIoFwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICDhAuGIAEGLEDGNEDGMcBwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAggQABiABBixA8ICBRAuGIAEwgILEC4YgAQYkQIYigXCAg0QABiABBixAxhDGIoFwgIIEC4YgAQYsQPCAhQQABiABBiRAhi0AhiKBRjqAtgBAcICFBAAGIAEGOMEGLQCGOkEGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAsICEBAuGAMYtAIY6gIYjwHYAQLCAgsQLhiABBjRAxjHAZgDEPEF06mZ55YoItCIBgGQBgK6BgQIARgHugYGCAIQARgKkgcHMTYuMTMuNaAHicABsgcGNi4xMy41uAfyHMIHCTItMTQuMTkuMcgHvgI&sclient=gws-wiz-serp" className="nav-link text-light"> Apa itu Laravel? </a>
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
