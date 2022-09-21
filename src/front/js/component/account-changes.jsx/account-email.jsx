import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/account.css";
import getState from "../store/flux";
import AddModal from "../component/add-modal.jsx";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

function  EmailAccordion ()  {


    return ( 
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Change Email</Accordion.Header>
          <Accordion.Body>
            <Form.Label htmlFor="basic-url">
              Please enter your new Email
            </Form.Label>
            <InputGroup classname="mb-2">
              <Form.Control
                placeholder="Email"
                aria-label="username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Label htmlFor="basic-url">
              Please confirm your new Email
            </Form.Label>
            <InputGroup classname="mb-2">
              <Form.Control
                placeholder="Email"
                aria-label="username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    )
}

export default EmailAccordion


/// this is kinda scrapped 