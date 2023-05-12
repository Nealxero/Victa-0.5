import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/landing.css";
import Example from "../../img/landingVicta.png";
import { MainSidebar } from "../component/mainsidebar";
export const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <MainSidebar>
        
        <div className="" id="landingCont">
          <div className="card mb-3" id="landingCard">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={Example}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" id="landTitle">Search your favorite Meals</h5>
                  <p className="card-text" id="landText">
                  search the dishes you want to add to each day of the week and for
            each food, in this way you can keep control a have a more balanced
            and healthy diet
                 Build your own way to eat through the week with our own and handly meal plannner
                  </p>
                </div>
              </div>
            </div>
          </div>
          

         
          


          <div className="card mb-3" id="landingCard">
            <div className="row g-0">

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" id="landTitle2">Planify your Week</h5>
                  <p className="card-text" id="landText">
                  Build your own way to eat through the week with our own and handly meal plannner
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src={Example}
                  className="img-fluid rounded-start card-image-end"
                  alt="..."
                />
              </div>
              
              
            </div>
          </div>
          
        </div>
      </MainSidebar>
    </>
  );
};
{
  /* <div className=" p-5 rounded-lg m-3 block-example border border-info rounded mb-0">
          <h1 className="display-4">Victa</h1>
          <p className="lead">
            Create your own weekly meal plans with our handly meal plannner,
            search the dishes you want to add to each day of the week and for
            each food, in this way you can keep control a have a more balanced
            and healthy diet
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div> */
}
