import React from "react";
import './SearchBox.css';

const SearchBox = ({ searchChange }) =>{

    return(
<div className="pa-2">

    <input 
            className="pa-4 ba b-green bg-lightest-blue search"
            type="search" 
            placeholder="Search Robots" 
            onChange ={searchChange}
    />
 

</div>
       

    );



}

export default SearchBox;