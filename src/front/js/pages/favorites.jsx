import React, { useState, useEffect, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


const Favorites = () => {
    const { store, actions } = useContext(Context);
    console.log(store)
    const favs = store.favorites
    if (!favs) return <p>loanding</p>;
    return (
        <Sidebar>
            <Container fluid>



                {
                    favs.map((value) => {
                        return (
                            
                                <Stack gap={4}>


                                    <Card style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>{value.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

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