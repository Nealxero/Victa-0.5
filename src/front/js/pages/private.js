import React, {useContext, useEffect} from "react"
import { Context } from "../store/appContext";
import { Login } from "./login";
import Logout from "./logout";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Private = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    console.log(localStorage.getItem("token"))

    useEffect(() => {
		if (store.token === undefined || store.token === null) navigate('/login');
		else  actions.protectedData();
	}, []);

    if (localStorage.getItem("jwt-token") == null || localStorage.getItem("jwt-token") == "undefined" ){
        return(
            <>
                <h2> Error! If you want to see this exclusive content, go  to the <Link to="/Login"> Login</Link> page, dont have an account yet?  <Link to="/signup"> Sign up!</Link> </h2>
            </>
        )
    }else{
        return(
        <>
            <div >
                <h1>If you see this, Welcome to your private page! that means you are already logged in <Link to="/Logout">Logout </Link></h1>
            </div>
        </>
    )
    }
    
    
}
