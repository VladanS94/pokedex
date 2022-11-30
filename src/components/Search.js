import React, {useContext} from 'react'
import './Header.scss'
import {BsSearch} from 'react-icons/bs'
import GlobalContext from './GlobalContext'


const Search = () => {
const {setSearch} = useContext(GlobalContext)

  return (
    <div className='search'>
        <input 
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search pokemon'
        />
        <BsSearch />
    </div>
  )
}

export default Search