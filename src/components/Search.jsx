import React from 'react'
import JSONDATA from '../Data/MOCK_DATA.json'


const Search = () => {
    return (
        <div>
            <input type="text" className="search-input" placeholder="Search" />
            {JSONDATA.map((val, key) => {
                return <div>{val.product}</div>
            })}
        </div>
    )
}

export default Search