import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaTrash } from 'react-icons/fa';
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";


export const Example = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (props.meals.length == 0) return (
    <>
      <Button variant="link" onClick={handleShow}>
        <FaPlus />
      </Button>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name} - {props.type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <FaPlus />
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name} - {props.type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.meals.map((meal, index) => { return <p>{meal.name}</p> })} <FaTrash /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

Example.propTypes = {
  match: PropTypes.object
};


