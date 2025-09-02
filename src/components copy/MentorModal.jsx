import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

const MentorModal = ({ show, handleClose, handleShow, item }) => {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lihat Detail
      </Button>
      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title><h3>{item.title}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <Image src={item.image} alt={item.title} className="img-fluid rounded" style={{ maxHeight: '550px', maxWidth: 'auto' }} />
          </div>
          <div className="mt-3">
            <h5 className='text-center'><strong>Jenis Kebakaran:</strong> {item.tools}</h5>
            <h6 className='text-justify'>{item.detail}</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button >
          <a href="https://pusaranmedia.com/read/28289/breaking-news-karhutla-di-sangatta-hanguskan-lahan-seluas-lima-hektare?utm_source=chatgpt.com" className="nav-link text-light">Lihat Berita</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
MentorModal.propTypes = {
  item: PropTypes.object,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleShow: PropTypes.func
}

export default MentorModal;