import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (  //the arguments are de-structuring the props
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} 
    />
);