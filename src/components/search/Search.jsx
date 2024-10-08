import React from 'react'
import { IoSearch } from 'react-icons/io5'

import './search.scss'

const Search = () => {
  return (
    <form className='header-search'>
        <button><IoSearch /></button>
        <input type="text" placeholder='Search for products...'/>
    </form>
  )
}

export default Search