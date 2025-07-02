import React, { useState } from "react";
import { Card, Col, Container, Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import { serviceItems } from "../data/Data";
import "../index.css";

const ServiceComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <Container>
      <h2 id="services" className="my-4 text-center sectionHeader text-light">
        Analisis Data Geospasial
      </h2>
      <Slider {...settings}>
        {serviceItems.map((item) => (
          <div className="px-3" key={item.id}>
            <Col>
              <Card className="bg-dark text-light service-card">
                <Card.Img
                  variant="top"
                  className="logoservice mx-auto"
                  src={item.image}
                  alt={item.title}
                  onClick={() => openModal(item.image)}
                  style={{ cursor: "pointer" }}
                />
                <Card.Body>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Slider>

      {/* Modal untuk Zoom Gambar */}
      <Modal show={showModal} onHide={closeModal} centered size="xl">
        <Modal.Body className="text-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ServiceComponent;
