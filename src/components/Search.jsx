import React from "react";
import { MdSearch } from 'react-icons/md'

function Search({ handleSearchNote }){
    return(
        <div className="search">
            <MdSearch className="searh-icons" size='1.3em'/>
            <input type="text" placeholder="Escribe para buscar..."
            onChange={(e)=>{
                handleSearchNote(e.target.value);
            }}/>
        </div>
    )
}

export default Search;