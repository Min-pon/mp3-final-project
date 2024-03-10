import React from 'react'
import { useParams  } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import Filter from '../components/Filter';

function ItemProductList() {
  const { type } = useParams();
  return (
    <div className=' flex justify-center p-7'>
    <Filter />
    <ProductCard />

    </div>
    
  )
}

export default ItemProductList