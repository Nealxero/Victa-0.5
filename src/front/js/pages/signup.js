import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  let navigate = useNavigate();

  const CreateUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/signup",
      {
        method: "POST",
        body: JSON.stringify({ "user-name": username, "user-email": email, "user-password": password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const confirmation = await response.json();
    if (response.status == 200) {
      navigate("/login");
    } else {
      navigate("/login") & alert("Succesfully Created")
    }
  };

  return (
    <div id="container">
      <div className="" id="image">
        <img
          id="imgStyle"
          className="img-fluid rounded-start"
          src="https://us.123rf.com/450wm/butenkow/butenkow1611/butenkow161100362/67310324-plantilla-de-dise%C3%B1o-de-logotipo-para-la-dieta-ilustraci%C3%B3n-de-vector-de-icono.jpg?ver=6"
        />
      </div>
      <div id="card">

        <div id="card-content">
          <div id="card-title">
            <h2>SIGN UP</h2>
            <div className="underline-title"></div>
          </div>
          <form className="form">
            <label htmlFor="user-name">Username</label>
            <input
              id="user-name"
              className="form-content"
              type="text"
              name="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="form-border"></div>
            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="form-border"></div>
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="form-border"></div>

            <input
              id="submit-btn"
              type="submit"
              name="submit"
              value="SIGN UP"
              onClick={CreateUser}
            />
            <p id="signup">
              <Link to="/login">Already have an account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
