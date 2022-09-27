import React, { useState, useEffect, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import { FaHeart, FaTrash } from 'react-icons/fa';




const Favorites = () => {
    const { store, actions } = useContext(Context);
    
    const favs = store.favorites
    if (!favs) return <p>loanding</p>; 
    return (
        <Sidebar>
            <Container fluid>



                {
                    favs.map((value, index) => {
                        return (
                            
                                <Stack gap={4}>


                                    <Card style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>{value.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button onClick={() => actions.deleteFavorite(value, index)}><FaTrash /></Button>
                                            

                                        </Card.Body>
                                    </Card>
                                </Stack>
                            
                        )
                    })
                }




            </Container>
        </Sidebar >
    );
};

export default Favorites