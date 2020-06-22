import React from 'react';
import './search-box.style.css';

export const SearchBox = (placeholderHandle) => (
    <div >
        <input 
            className='search'
            type='search' 
            placeholder={placeholderHandle.placeholder}
            onChange={placeholderHandle.searchResult}
        />

    </div>
)