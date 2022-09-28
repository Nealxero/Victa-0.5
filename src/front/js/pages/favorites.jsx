import React, { useState, useEffect, useContext } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "../../styles/fav.css";

import { FaHeart, FaTrash } from "react-icons/fa";

export const Favorites = () => {
  const { store, actions } = useContext(Context);

  const favs = store.favorites;
  if (!favs) return <p>loading...</p>;
  return (
    <Sidebar>
      {favs.map((value, index) => {
        return (
          <Container fluid style={{display: 'inline-block', width: '25rem', height: "25rem" }}>
            <Stack gap={4}>
              <Card >
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="danger"
                    onClick={() => actions.deleteFavorite(value, index)}
                  >
                    <FaTrash />
                  </Button>
                </Card.Footer>
              </Card>
            </Stack>
          </Container>
        );
      })}
    </Sidebar>
  );
};
