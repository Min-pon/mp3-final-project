import React from 'react'
import { useParams  } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import Filter from '../components/Filter';
import SideBar from '../components/SideBar';

function ItemProductList() {
  const { type } = useParams();
  return (
    <div className=' flex justify-center '>
    <div className=" flex justify-between w-full">
      <h2>Woman’s Clothing</h2>
      <div className="">filter</div>
    </div>
    {/* <Filter />
    <ProductCard />
    <SideBar /> */}

    </div>
    
  )
}

export default ItemProductList