import React from "react";

export default function Search({handleSearch}){
  
  return(
    <div className="searchbar">
    <label htmlFor="search">Search Super Hero:</label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange={handleSearch}
    />
  </div>
);
  
}