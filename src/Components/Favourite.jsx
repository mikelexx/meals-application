import React, { useContext } from 'react'
import { Mycontext } from '../context'

export default function Favourite({favourite}) {
    const {selectMeal,removeFromFavourites} = useContext(Mycontext)
  const {strMealThumb:image,strMeal:title,idMeal} = favourite
  function handleFavouriteMealClick(){
    selectMeal(idMeal)
  }
  function handleRemoveFavourite(){
        removeFromFavourites(idMeal)
  }
  
       
  return (
      <div className='favourite-meal'>
               <img  onClick={handleFavouriteMealClick}src={image} />
                <button onClick={handleRemoveFavourite}>remove</button>
        </div>
       
  )
}
