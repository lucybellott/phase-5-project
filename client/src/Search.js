import React from 'react'


export default function Search({handleSearch, searchValue}) {

    return (
        <div>
            <input onChange={handleSearch} value={searchValue} type="text" placeholder=" 🔎 Search News"/>
            <br/>
            <br/>
        </div>
    )
}
