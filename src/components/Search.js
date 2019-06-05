import React from 'react';

const Search = ({searchField, searchChange}) =>{
    return (
        <div className="pa2">
        <input className="pa1 ba b--blue bg-lightest-blue"
         type="search" 
         placeholder="Search for your dog's mating partner"
         onChange={searchChange}/>
        </div>
    )
}

export default Search;