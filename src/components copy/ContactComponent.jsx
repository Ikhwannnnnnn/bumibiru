import React from "react";
import { FaPhone } from "react-icons/fa";
import { Row } from "react-bootstrap";
const ContactComponent = () => {
  return (
    <>
      <h2 id="contact" className="my-2 text-center sectionHeader text-light">
        Tentang Kami
      </h2>
      <Row className="py-5 text-light">
        <div>
          <p className="my-3 me-3">
            project dengan judul <strong>BumiBiru</strong>{" "}
            merupakan sebuah WebGis yang sangat bermanfaat untuk
            menempatkan areal mana saja yang rawan akan kebakaran hutan. Dengan
            perancangan WebGis BumiBiru, pihak pihak terkait sebagai pemangku
            kepentingan dapat mengambil keputusan yang lebih baik dalam
            penanggulangan risiko kebakaran hutan. Pengembangan WebGis BumiBiru
            menggunakan beberapa konsep sistematis, untuk pengaplikasiannya
            dengan merancang Formulir Pelaporan dengan pengguna dapat melaporkan
            kejadian kebakaran melalui formulir online yang terintegrasi dengan
            peta.
          </p>
          <form>
            <a
              href="mailto:laporbumibiru123@gmail.com"
              className="btn btn-purple-report"
            >
              {" "}
              <FaPhone size="1rem" className="me-1 text-purple" />{" "}
              <strong> Hubungi Kami </strong>
            </a>
          </form>
        </div>
      </Row>
    </>
  );
};

export default ContactComponent;
