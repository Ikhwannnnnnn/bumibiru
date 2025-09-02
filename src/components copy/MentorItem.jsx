import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import PortfolioModal from "./MentorModal"
import PropTypes from 'prop-types';

const MentorItem = ({item}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Col className='mb-2' >
        <Card className='bg-dark'>
            <Card.Img src={item.image} alt={item.title}/>
            <Card.Body>
              <h5>{item.title}</h5>
              <PortfolioModal show={show} handleClose={handleClose} handleShow={handleShow} item={item} />
            </Card.Body>
        </Card>
    </Col>
    </>
  )
}

MentorItem.propTypes = {
  item: PropTypes.object
}

export default MentorItem