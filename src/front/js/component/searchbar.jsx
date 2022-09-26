import React, { useState } from "react";
import "../../styles/searchbar.css";
import { FaSearch, BiTrash, FaRegTimesCircle } from 'react-icons/fa';
import Sidebar from "../component/sidebar.jsx";
import { Card } from "react-bootstrap";



const fetchFoodData = async (key) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=64c7278dfdd7444cb9348aa2866a9ca2&query=${key}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((fetchResponse) => {
      return fetchResponse.json();
    })
    .then((jsonResponse) => jsonResponse)
    .catch((error) => {
      console.log(error);
    });
};

function SearchBar({ placeholder, data }) {
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleFetchData = async () => {
    setLoading(true);
    const data = await fetchFoodData(wordEntered);
    setFilteredData(data?.results);
    setLoading(false);
  };


  return (
    <Sidebar>
      <div className="search">
        <div className="searchInputs">
          <input
            className="form-control input-lg"
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <button disabled={loading} onClick={handleFetchData}>
                <FaSearch />
              </button>
            ) : (
              <FaRegTimesCircle id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Card>
                  <Card.Img src={value?.image} />

                  <p>{value.title} </p>
                  
                  

                </Card>
              );
            })}
          </div>
        )}
      </div>
    </Sidebar>
  );
}

export default SearchBar;
