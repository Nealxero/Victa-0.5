import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // the import here was ./home.css
import "../styles/index.css";
import "../styles/searchbar.css";
import injectContext from "./store/appContext";
import Dashboard from "./pages/dashboard.jsx";
import RecipeSearch from "./pages/recipesearch.jsx";
import { Favorites } from "./pages/favorites";
import Sidebar from "./component/sidebar.jsx";
import Account from "./pages/account.jsx"; // this wasn't here
import Logout from "./pages/logout.jsx";
import ScrollToTop from "./component/scrollToTop";
import { LandingPage } from "./pages/landing";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { ForgotPassword } from "./pages/forgot";
import { Private } from "./pages/private";
import { ResetPassword } from "./pages/resetpassword";
import { MainSidebar } from "./component/mainsidebar";
import { Navigate } from "react-router-dom";
//create your first component
const Layout = () => {
  
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  //console.log(localStorage.getItem("jwt-token"))

  //(localStorage.getItem("jwt-token") == null || localStorage.getItem("jwt-token") == "undefined" ){
    return ( 
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          
            
              
                <Routes>
                  <Route path="/" element={<LandingPage />} /> 
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/recipesearch" element={<RecipeSearch />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/account" element={<Account />} />
                  <Route element={<h1>Not found!</h1>} />
                  <Route element={<Login />} path="/login" />
                  <Route element={<ForgotPassword />} path="/forgotpassword" />
                  <Route element={<SignUp />} path="/signup" />
                  <Route element={<Private />} path="/private" />
                  <Route element={<ResetPassword />} path="/reset" />
                  <Route element={<Logout/>} path="/logout"/>
                </Routes>
              
           
          
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

// code
export default injectContext(Layout);
