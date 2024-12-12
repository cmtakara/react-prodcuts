import React from 'react'

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
        <input 
          type='text/' 
          value={filterText} 
          placeholder='Search...'
          onChange = {(evt) => onFilterTextChange(evt.target.value)}
        />
        <label>
            <input 
              type='checkbox' 
              checked={inStockOnly}
              onChange={(evt) => onInStockOnlyChange(evt.target.checked)}
            />
            {' '}
            Only show products in stock
        </label>
    </form>
  )
}

