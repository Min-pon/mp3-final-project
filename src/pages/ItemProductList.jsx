import React from 'react'
import { useParams  } from 'react-router-dom'
import ProductCard from "../components/ProductCard"

function ItemProductList() {
  const { type } = useParams();
  return (
    <>
    {/* <div>ItemProductList {type}</div> */}
    <ProductCard />
    </>
    
  )
}

export default ItemProductList