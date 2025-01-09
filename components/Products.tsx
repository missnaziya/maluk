// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************
"use client"
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// import ENDPOINT from "../config/appConfig";
import ENDPOINT from '@/config/appConfig';

const Products =  ({ slug }: any) => {
  const [products, setProducts] = useState([]);

 
  // const category =slug?.params?.slug[0] || "*"
    // Ensure `slug` is defined and in the expected format
    useEffect(() => {
      let url;
    
      // Check if slug.params.slug is an array and contains elements
      if (Array.isArray(slug?.params?.slug) && slug.params.slug.length > 0) {
        const category = slug.params.slug[0]; // Get the first category if it exists
        url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?filters[category][$equals]=${category}`;
        // url = `${ENDPOINT.BASE_URL}/api/products?filters[category][$equals]=${category}`;
      } else {
        // If no category is provided, use a default API call (e.g., fetching all products)
        url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`;
        // url = `${ENDPOINT.BASE_URL}/api/products`;
      }
    
      // Fetch the data from the API
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data); // Set the fetched data to state
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // Handle errors
        });
    }, [slug]); // Add slug as a dependency to re-run when it changes
    


  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
      {products.length > 0 ? (
        products.map((product: Product) => (
          
          <ProductItem key={product.id} product={product} color="black" />
        ))
      ) : (
        <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
          No products found for specified query..
        </h3>
      )}
    </div>
  );
};

export default Products;
