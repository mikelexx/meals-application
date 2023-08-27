import React, { useContext } from 'react'
import { Mycontext } from '../context'

export default function Modal() {
  const {selectedMeal,closeModal} = useContext(Mycontext)
  const {strMealThumb:mealPic,strInstructions:cookingProcedure,
  strMeal:title,strSource:source} = selectedMeal
  function handleButtonClick(){
      closeModal()
  }
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        
        <img src={mealPic} className='img modal-img'></img>
        <div className='modal-content'>
        <h4>{title}</h4>
        <p>Cooking Instructions</p>
        <p>{cookingProcedure}</p>
        <a href={source} target="_blank">Original Source</a>
        <button className='btn btn-dark' onClick={handleButtonClick}>close</button> </div>
     </div>
    </div>
  )
}
