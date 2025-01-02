"use client";
// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// import ENDPOINT from "../config/appConfig";
import ENDPOINT from '@/config/appConfig';

import Heading from "./Heading";
const  TopSellingProducts =  ({ props }: any) => {
  const [products, setProducts] = useState([]);
  const fetchEvents =  () => {
    try {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?filters[category][$equals]=${props.name}`
 
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{

    fetchEvents();
  },[])

  
  return (
    <>
  


 <div className="bg-white border-t-4 border-white">
       <div className="max-w-screen-2xl mx-auto ">
         <Heading title="Maluk TOP SELLING PRODUCTS" />
         <div className='grid grid-cols-4 justify-items-center max-w-screen-xl mx-auto py-10 gap-x-5 px-16 gap-y-8 max-md:grid-cols-2 max-sm:grid-cols-1'>
             {products.map((product: Product) => (
             <ProductItem key={product.id} product={product} color="white" />
           ))}
         </div>
       </div>
     </div>


    </>

  );
};

export default TopSellingProducts;
