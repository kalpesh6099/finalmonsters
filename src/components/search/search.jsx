import React from 'react'

import './search.css'

export const Search = ({placeholder , handle}) =>(
    <div>
        <input 
            className="search"
            type = 'search'
            placeholder = {placeholder}
            onChange = {handle}
        />
    </div>
)