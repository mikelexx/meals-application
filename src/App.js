import './App.css';
import Favourites from './Components/Favourites'
import Search from './Components/Search';
import Meals from './Components/Meals'
import Modal from './Components/Modal'
import {useState,useEffect, useContext } from 'react';
import { Mycontext } from './context';
import axios from 'axios';
export default function App() {
  const storedFavouriteMeals = JSON.parse(localStorage.getItem("favourites"))

   
const [searchTerm,setSearchTerm] = useState("a")
const [supriseMe,setSupriseMe] = useState(false)
const [loading,setLoading] = useState(false)
const [meals,setMeals] = useState([])
const [showModal,setShowModal] = useState(false)
const [selectedMeal,setSelectedMeal] = useState(null)
const [favourites,setFavourites] = useState(storedFavouriteMeals ||[])
  const allMealsUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='+ searchTerm
  const randomMealUrl = 'https://themealdb.com/api/json/v1/1/random.php'

 async function fetchMeals(mealSearchUrl){
  setLoading(true)
  try{
    const {data} =  await axios.get(mealSearchUrl)
    const {meals} = data
    meals?setMeals(meals):setMeals([])
  }catch(err){
    const {message} = err
      console.log(message)
  }
  setLoading(false)


}
function selectMeal(idMeal){
  const meal = meals.find(meal=>meal.idMeal===idMeal)
  setSelectedMeal(meal)
  setShowModal(true)
}
function addToFavourites(idMeal){
  const meal = meals.find(meal=>meal.idMeal===idMeal)
  const isFavourite = favourites.find(favourite=>favourite.idMeal===meal.idMeal)
 if(!isFavourite){
   const updatedFavourites = [...favourites,meal]
   setFavourites(updatedFavourites) 
 }

 }
  function removeFromFavourites(idMeal){
  
    const updatedFavourites = favourites.filter(favourite=>favourite.idMeal!=idMeal)
    setFavourites(updatedFavourites)
    }
 

function closeModal(){
 setShowModal(false) 
}
function fetchRandomMeal(){
  fetchMeals(randomMealUrl)
}

  useEffect(()=>{
    fetchMeals(allMealsUrl)
},[])
  useEffect(()=>{
    if (searchTerm==='') return
    fetchMeals(allMealsUrl)

  },[searchTerm])
  useEffect(()=>{
    localStorage.setItem("favourites",JSON.stringify(favourites))
  },[favourites])
  
  
  return (
   <>
   <Mycontext.Provider  value={{meals,addToFavourites,removeFromFavourites,favourites,loading,selectMeal,selectedMeal,closeModal,showModal,setSearchTerm,fetchRandomMeal}}>
    <Search/>
    <Favourites/>
    <Meals/>
   { showModal && <Modal/>}
   </Mycontext.Provider>
 </>)
}