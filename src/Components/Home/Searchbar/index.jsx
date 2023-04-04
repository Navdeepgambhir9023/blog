import React from 'react'
import "./searchbar.css"

const Searchbar = ({ value, handelSearchKey, clearSearch, formSubmit }) => {
    return (
        <div className="searchBar-Wrap">
            <form action="" onSubmit={formSubmit}>
                <input type="text"
                    onchange={handelSearchKey}
                    placeholder="Search"
                    value={value} />
                {value && <span className="clear" onClick={clearSearch}>X</span>}
                <button>Go</button>
            </form>
        </div>
    )
}

export default Searchbar