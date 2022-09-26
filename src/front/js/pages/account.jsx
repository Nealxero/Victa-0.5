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
  const [updatePassword, setUpdatePassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [id] = useState(localStorage.getItem("user_id"));

  const updateClickPass = async (e) => {
    e.preventDefault();

    console.log({ updatePassword });

    if (updatePassword === checkPassword) {
      const updatePass = await fetch(
        "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/user/account_password",
        {
          method: "PUT",
          body: JSON.stringify({ "user-password": updatePassword }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt-token"),
          },
        }
      );
      const confirmPass = await updatePass.json();
      if (updatePass.status == 200) {
        alert("all working fine for password");
      }
    }
  };

  const updateClickMail = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify({ "user-email": updateEmail }));

    if (updateEmail === checkEmail) {
      const updateMail = await fetch(
        "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/user/account_email",
        {
          method: "PUT",
          body: JSON.stringify({ "user-email": updateEmail }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt-token"),
          },
        }
      );

      const confirmMail = await updateMail.json();
      if (updateMail.status == 200) {
        alert("all working fine for mail");
      }
    } else {
      alert("Los valores no son iguales");
    }
  };

  console.log({ checkPassword, updatePassword });

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
                  <Form.Label htmlFor="basic-url">
                    Please enter your new Email
                  </Form.Label>
                  <InputGroup
                    classname="mb-2"
                    id="basic-url"
                    name="updateEmail"
                    onChange={(e) => setUpdateEmail(e.target.value)}
                  >
                    <Form.Control
                      placeholder="Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Label htmlFor="basic-url2">
                    Please confirm your new Email
                  </Form.Label>
                  <InputGroup
                    classname="mb-2"
                    id="basic-url2"
                    value="checkEmail"
                    onChange={(e) => setCheckEmail(e.target.value)}
                  >
                    <Form.Control
                      placeholder=" Repeat Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button id="emailbtn" onClick={updateClickMail}>
                    Submit Changes
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" id="passacc">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Change Password</Accordion.Header>
                <Accordion.Body>
                  <Form.Label htmlFor="basic-url3">
                    Please enter your new Password
                  </Form.Label>
                  <InputGroup
                    classname="mb-2"
                    id="basic-url3"
                    value="updatePassword"
                    onChange={(e) => setUpdatePassword(e.target.value)}
                  >
                    <Form.Control
                      placeholder="Password"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Label htmlFor="basic-url4">
                    Please confirm your new Password
                  </Form.Label>
                  <InputGroup
                    classname="mb-2"
                    id="basic-url4"
                    name={checkPassword}
                    onChange={(e) => setCheckPassword(e.target.value)}
                  >
                    <Form.Control
                      placeholder="Repeat Password"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Button id="passbtn" onClick={updateClickPass}>
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
