import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const logClick = async (e) => {
    e.preventDefault();
    const loginOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "user-email": email,
        "user-password": password,
      }),
    };

    const promiseResponse = await fetch(
      "https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/login",
      loginOptions
    )
      .then((resp) => {
        console.log(resp);
        if (resp.status == 401) return false;
        return resp.json();
      })
      .then((res) => {
        if (!res) return alert("incorrect ");
        alert("Login in successfull");
        localStorage.setItem("jwt-token", res.token);
        console.log(res);
        localStorage.setItem("user_id", res.user_id);
        navigate("/account");
      })
      .catch((error) => console.log("Something went wrong", error));

    
  };

  return (
    <div id="container">
      <div id="image">
        <img
          id="imgStyle"
          src="https://us.123rf.com/450wm/butenkow/butenkow1611/butenkow161100362/67310324-plantilla-de-dise%C3%B1o-de-logotipo-para-la-dieta-ilustraci%C3%B3n-de-vector-de-icono.jpg?ver=6"
        />
      </div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="form-border"></div>
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="form-border"></div>
            <Link to="">
              <legend id="forgot-pass">
                <Link to="/forgotpassword">Forgot password?</Link>
              </legend>
            </Link>
            <input
              onClick={(e) => logClick(e)}
              id="submit-btn"
              type="submit"
              name="submit"
              value="LOGIN"
            ></input>
            <h4 id="signup">
              Don't have account yet? <Link to="/signup">Sign Up for Free</Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};
