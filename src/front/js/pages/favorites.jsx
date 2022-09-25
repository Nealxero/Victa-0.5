import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";

const Favorites = ()=>{
    //const { store, actions } = useContext(Context);
    return (
        <Sidebar>
        
		<Card>
		
			<h1> Esto es una prueba menor </h1>
		
		</Card>
	

        </Sidebar>
    );
};

export default Favorites