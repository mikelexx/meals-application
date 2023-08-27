import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../context'
import Favourite from './Favourite'

export default function Favourites() {
  const {favourites} = useContext(Mycontext)

  return (
    <>
     <div className='favourites-container'>
     <h2>Favourites</h2>
     <div className='favourite-meals'>
      {favourites.map((favourite)=>{
       return <Favourite key={favourite.idMeal} favourite={favourite}/>
      
    })}</div>
    </div>
  
    </>)
}

