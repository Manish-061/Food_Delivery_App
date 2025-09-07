import React from 'react'
import { useParams } from 'react-router-dom'


const FoodDetails = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails