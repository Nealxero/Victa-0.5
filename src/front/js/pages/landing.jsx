import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/landing.css";
export const LandingPage = () => { 
  let  navigate = useNavigate()

  const onclickStart = () =>{
    navigate("/Signup")
  }


    return (
      <div className="container-fluid" id="landingCont">
      <h1 id="titulo"> Victa </h1>
      <h2 id="resumen"> Create your own weekly meal plans with our handly meal plannner, search the dishes you want to add to each day of the week and for each food, in this way you can keep control a have a more balanced and healthy diet
      </h2>
    <div id="carouselExampleDark" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" className="" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://img.freepik.com/free-vector/modern-2022-new-year-calendar-design-template_1017-34368.jpg" className="" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWW1vR8OPVYf9nPNd2jP82qz8wimYt67LUQ&usqp=CAU" className="" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<button id="landBtn" onClick={onclickStart}>
Get Started 
</button>
</div>


    );
}
