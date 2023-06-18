import React from "react";

const SearchBox=({onSearchChange})=>{
    return(
        <div className="pa2">
            <input onChange={onSearchChange} className="pa3 ba b--black bg-white" type="search" placeholder="search players"></input>
        </div>
    );
}

export default SearchBox;