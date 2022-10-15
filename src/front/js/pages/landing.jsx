import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/landing.css";
import { MainSidebar } from "../component/mainsidebar";
export const LandingPage = () => {
  let navigate = useNavigate();

 

  return (
    <>
      <MainSidebar >
      <div className="" id="landingCont">
        <div class="bg-light p-5 rounded-lg m-3 block-example border border-info rounded mb-0">
          <h1 class="display-4">Victa</h1>
          <p class="lead">
            Create your own weekly meal plans with our handly meal plannner,
            search the dishes you want to add to each day of the week and for
            each food, in this way you can keep control a have a more balanced
            and healthy diet
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
        </div>
      </MainSidebar>
    </>
  );
};
