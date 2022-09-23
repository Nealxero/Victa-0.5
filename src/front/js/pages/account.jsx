import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "../../styles/account.css";
import getState from "../store/flux";
import AddModal from "../component/add-modal.jsx";
import {
  Container,
  Form,
  InputGroup,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";


const Account = () => {
  const [updatePassword, setUpdatePassword] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);

  const updateClick = async (e) => {
    e.preventDefault();
    const updateMail = await fetch(
      "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/account",
      {
        method: "PUT",
        body: JSON.stringify({ "user-email": updateEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const updatePass = await fetch(
      "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/account",
      {
        method: "PUT",
        body: JSON.stringify({ "user-password": updatePassword }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const confirmMail = await updateMail.json();
    if (updateMail.status == 200) {
      alert("all working fine for mail");
    }
    
    const confirmPass = await updatePass.json();
    if (updatePass.status == 200) {
      alert("all working fine for password");
    }
  };
  return (
    <Sidebar>
      <div className="pages">
        <Card id="CardAccount">
          <Card.Title id="CardTitle"> Account Settings </Card.Title>
          <Card.Body>
            <Accordion defaultActiveKey={["0"]} id="emailacc">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Change Email</Accordion.Header>
                <Accordion.Body>
                  <Form.Label
                    htmlFor="basic-url"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                  >
                    Please enter your new Email
                  </Form.Label>
                  <InputGroup classname="mb-2">
                    <Form.Control
                      placeholder="Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Label htmlFor="basic-url">
                    Please confirm your new Email
                  </Form.Label>
                  <InputGroup classname="mb-2">
                    <Form.Control
                      placeholder=" Repeat Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button id="emailbtn" onClick={updateClick}>
                    {" "}
                    Submit Changes
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" id="passacc">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Change Password</Accordion.Header>
                <Accordion.Body>
                  <Form.Label
                    htmlFor="basic-url"
                    value={updatePassword}
                    onChange={(e) => setUpdatePassword(e.target.value)}
                  >
                    Please enter your new Password
                  </Form.Label>
                  <InputGroup classname="mb-2">
                    <Form.Control
                      placeholder="Password"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Label htmlFor="basic-url">
                    Please confirm your new Password
                  </Form.Label>
                  <InputGroup classname="mb-2">
                    <Form.Control
                      placeholder="Repeat Password"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button id="passbtn" onClick={updateClick}>
                    {" "}
                    Submit Changes{" "}
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    </Sidebar>
  );
};
export default Account;

/*  <Button
        variant="primary"
        onClick={() => {
          setOpenAddModal(true);
        }}
      >
        Click me
    </Button>{" "}
      {openAddModal && <AddModal />}
*/
