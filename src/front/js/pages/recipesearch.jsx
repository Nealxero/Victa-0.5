import React from "react";
import SearchBar from "../component/searchbar.jsx";
import BookData from '../../../../data.json';

const RecipeSearch = ()=>{
    return (
        <>
            <SearchBar placeholder="Search..." data={BookData}/>
        </>
    );
};

export default RecipeSearch