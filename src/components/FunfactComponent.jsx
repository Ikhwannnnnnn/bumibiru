import { Col, Row } from "react-bootstrap";
import funfact from "../assets/funfact.png";
import logo from "../assets/logo-iwan.png";
const FunfactComponent = () => {
  return (
    <>
      <h2
        id="funfact"
        className="my-2 mt-5 mb-5 text-center sectionHeader text-light"
      >
        INFORMASI KEBAKARAN HUTAN
      </h2>
      <Row className="text-light" xs={1} md={2} g={4}>
        <Col id="mainImg" className="order-1 order-md-1">
          <img src={logo} />
        </Col>
        <Col className="aboutText text-left align-center order-2 order-md-2">
          <h3 className="text-logo">Kebakaran Hutan</h3>
          <p>
            Kebakaran hutan merupakan salah satu manifestasi dari tingginya
            tekanan terhadap sumber daya hutan. Dampak yang berkaitan langsung
            dengan kebakaran hutan atau lahan merupakan terjadinya pencemaran
            dan kerusakan lingkungan hidupseperti fllora dan fauna, tanah, dan
            air.
          </p>
          <h3 className="text-logo">WebGis</h3>
          <p>
            WebGis merupakan sebuah teknologi berupa konfigurasi yang memiliki
            server untuk mengaktifkan sebuah MapServer yang memiliki peran
            sebagai pengelola peta yang diminta dari konsumen kemudian dilakukan
            proses beautifikasi untuk diberikan kembali kepada konsumen (Ryana,
            2015). WebGis beroperasi dengan menggabungkan teknologi Web dengan
            Sistem Informasi Geografis (SIG). Data geografis yang digunakan
            umumnya disimpan dalam bentuk format tertentu seperti shapefile,
            GeoJSON, dan Raster.
          </p>
          <h3 className="text-logo">HotSpot</h3>
          <p>
            Titik panas (hotspot) adalah indikator kebakaran hutan yang
            mendeteksi suatu lokasi yang memiliki suhu relatif lebih tinggi
            dibandingkan dengan suhu disekitarnya (Peraturan Menteri Kehutanan
            Nomor : P. 12/Menhut-II/2009 Tentang Pengendalian Kebakaran Hutan,
            2009).
          </p>
        </Col>
      </Row>
    </>
  );
};

export default FunfactComponent;
