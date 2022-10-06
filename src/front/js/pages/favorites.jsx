import React, { useState, useEffect, useContext } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext.js";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "../../styles/fav.css";

import { FaHeart, FaTrash } from "react-icons/fa";

// Test Heroku
export const Favorites = () => {
  const { store, actions } = useContext(Context);

  const favs = store.favorites;
  if (!favs) return <p>loading...</p>;
  return (
    <Sidebar>
      <div className="container-fluid">
      <div className="card-group">
      {favs.map((value, index) => {
        return (
              <div className="card" >
                <div className="card-body">
                  <div className="card-title">{value.name}</div>
                  <div className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    variant="danger"
                    onClick={() => actions.deleteFavorite(value, index)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
           
        );
      })}
      </div>
      </div>
    </Sidebar>
  );
};
