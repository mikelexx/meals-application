import React, { useContext } from 'react'
import { Mycontext } from '../context'
import SingleMeal from './SingleMeal'
export default function Meals() {
  const {meals,loading}= useContext(Mycontext)
  // function handleOnclick(){
  // }
 if(loading){
  return <h1 className='place-element-center'>loading...</h1>
 }
if (meals.length<1){
  return <h1 className='place-element-center'>No meals matched your searchteram.Please try again</h1>
}
return <div className='mealsBox'>

  { meals.map(meal=>{
    const {idMeal} = {...meal}
    return <SingleMeal key={idMeal} meal={meal}/>
  })}</div>

}
  

  
  
