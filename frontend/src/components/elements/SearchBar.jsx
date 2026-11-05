
import loupe from '../../assets/svg/magnifying-glass-outline.svg';

import { useState } from "react";

function SearchBar() {

    // State
    const [newSearch, setNewSearch ] = useState("");

    // Comportements
    const handleChange = (event) => {
        const valueAfterChange = event.target.value;
        console.log(valueAfterChange);
        setNewSearch(valueAfterChange);
    } 


    // Affichage
    return (
        <div className="flex px-2 items-center text-white header-search">
                <label htmlFor="searchHead" className='px-2'>
                    <input 
                        type="text" 
                        name="searchBar" 
                        itemProp="query-input" 
                        placeholder='Kosa ou rode ? / Que recherches-tu ?'
                        className="p-2 text-black bg-white box-border w-auto min-w-[19rem]"
                        value={newSearch}
                        onChange={handleChange}
                        />
                </label>
                <button onClick={() => alert("!")} type='submit' className='p-1 bg-green-300 rounded-full bg-opacity-75'>
                    <img src='../../assets/svg/magnifying-glass-outline.svg' width='40px' height='40px' alt='Clique ter la pou lance la recherche !'></img>
                </button>
            </div>
    )
}

export default SearchBar;