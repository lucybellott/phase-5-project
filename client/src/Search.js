import React from 'react'


export default function Search({handleSearch, searchValue}) {

    return (
        <div className="search-body">
            <div className="form-inputs">
                <input style={{margin: "0 auto", float:"none", width:"300px"}}  onChange={handleSearch} value={searchValue} type="text" placeholder=" 🔎 Search News"/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        
    )
}
