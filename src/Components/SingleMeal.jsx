import React, { useContext } from 'react'
import {BsHandThumbsUp} from 'react-icons/bs'
import { Mycontext } from '../context'

export default function SingleMeal({meal}) {
  const {strMeal,strMealThumb} = meal
  const {selectMeal,addToFavourites} = useContext(Mycontext)
function handleImageClick(){
  selectMeal(meal.idMeal)

}
function handleLikeBtnClick(){
  addToFavourites(meal.idMeal)
}  
  return(
   <><div className="card mealCard" style={{width:"22rem"}}>
   <img style={{height:"15rem"}} onClick={handleImageClick} src={strMealThumb} className="card-img-top" alt="..."/>
   <div className="card-body">
     <div className='mealNameAndLikeBtn'><h5 className="card-title">{strMeal}</h5>
     <button onClick={handleLikeBtnClick}href="#" className=" btn"><BsHandThumbsUp/></button></div>
   </div>
 </div>
   </>)
  
}

