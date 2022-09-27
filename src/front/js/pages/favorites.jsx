import React, { useState, useEffect, useContext } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  const favs = store.favorites;
  if (!favs) return <p>loanding</p>;
  return (
    <Sidebar>
        
       <Container flex style={{display: "flex", flexWrap: "wrap", width:"25%"}}>
        <CardGroup>
        {favs.map((value, index, item) => {
          return ( 
            <Stack gap={4}>
             
                <Card> 
                  <Card.Body>
                 
                    <Card.Title>{value.name}</Card.Title>
                    <Card.Text>
                     trial
                    </Card.Text>
                    
                  </Card.Body>
                  <Card.Footer>
                        <Button variant="danger" onClick={() => actions.deleteFavorite( index )}> Delete </Button>
                    </Card.Footer>
                </Card>
             
            </Stack> 
          );
        })}</CardGroup>
      </Container>
      
    </Sidebar>
  );
};

export default Favorites;


/* 
<Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

*/