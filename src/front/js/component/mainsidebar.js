import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";

import { GrUserNew, GrLogin } from "react-icons/gr";

import { NavLink } from "react-router-dom";
import Victa from "../../img/victa.png";

export const MainSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  


  const mainItems = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },

    {
      path: "/login",
      name: "Login",
      icon: <GrLogin />, 
    },
    {
      path: "/signup",
      name: "Signup",
      icon: <GrUserNew />,
    },
  ];

  return (
    <div className="container-fluid" id="sideContainer">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div className="logo_name">
            <img className="logo" src={Victa} />
            <h1
              style={{ display: isOpen ? "flex" : "none" }}
              className="appname"
            >
              Victa
            </h1>
          </div>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
          {mainItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div>{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
