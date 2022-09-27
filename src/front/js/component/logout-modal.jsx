import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaSignOutAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

export function LogoutModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate()

  const LogoutClick = (e) => {
    localStorage.clear();
    navigate("/login")

  }

   useEffect(() => {
    if (!localStorage.getItem("jwt-token")) {
      navigate("/");
    } 
  }, [])  

  return (
    <>
      <span className="button" onClick={handleShow}>
        <FaSignOutAlt />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to log out?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Stay
          </Button>
          <Button
            variant="danger"
            onClick={function () {
              window.location.reload();
              LogoutClick();
              handleClose();
            }}
            
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;
