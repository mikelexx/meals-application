import React, { useContext, useState } from 'react'
import { Mycontext } from '../context'

export default function Search() {
  const [text,setText] = useState("")
  const {setSearchTerm,fetchRandomMeal} = useContext(Mycontext)
  function handleChange(event){
      const textInput = event.target.value
      setText(textInput)
  }
  function handleSearchSubmit(e){
      e.preventDefault()
      setSearchTerm(text)
  }
  function handleSupriseMeClick(){
    setText('')
    setSearchTerm('')
    fetchRandomMeal()
  }

  return (
    <><form onSubmit={handleSearchSubmit} className='searchContainer'>
    <input type='text' onChange={handleChange} value={text} className="searchInput " placeholder='Type favourite food'></input>
    <button type='submit' className='btn btn-secondary'>Search</button>
    <button  type='button' onClick={handleSupriseMeClick} className='btn btn-info'>Suprise me!</button>
  </form>
  </>
  )
}
