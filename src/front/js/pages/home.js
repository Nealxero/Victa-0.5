import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Card } from "react-bootstrap";

export const Home = () => {
	//const { store, actions } = useContext(Context);
	const { store, actions } = useContext(Context);
	console.log(store)

	return (
		<Card>
		
			{store.users.map((item, index) => {
				return (
				<p>{item.id}</p>)
			})}
			<h1> Esto es una prueba menor </h1>
		
		</Card>
	);
};

/* 

{store.favorites.map((item, index, path, uid) => {


	return (
		<Card>


			
				{item.name}
			
		</Card>
	)
})}
*/