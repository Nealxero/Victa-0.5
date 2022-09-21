import React, { useContext, useState } from "react";
import { ProvideAuth } from "./use-auth.js";


 function PasswordAccordion ()  {

    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Change Password</Accordion.Header>
          <Accordion.Body>
            <Form.Label htmlFor="basic-url">
              Please enter your new Password
            </Form.Label>
            <InputGroup classname="mb-2">
              <Form.Control
                placeholder="Email"
                aria-label="username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Label htmlFor="basic-url">
              Please confirm your new Password
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

export default PasswordAccordion


/// this is kinda scrapped 