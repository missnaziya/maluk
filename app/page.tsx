
import {
    CategoryMenu,
    Hero,
    Incentives,
    IntroducingSection,
    Newsletter,
    Products,
    ProductsSection,
  } from "@/components";
  import CategoryMenu2 from "@/components/CategoryMenu2";
  import InspiredProducts from "@/components/InspiredProducts";
  import NewProducts from "@/components/NewProducts";
  import OfferBanner from "@/components/OfferBanner";
  import ExtraBanner from "@/components/ExtraBanner";
  import TopSellingProducts from "@/components/TopSellingProducts";
  import React, { useState, useEffect } from "react";
  import News from "@/components/NewsLetterfooter";
  import NewsLetterfooter from "@/components/NewsLetterfooter";
import BrandSection from "@/components/BrandSection";
import ProductCategory from "@/components/ProductCategory";
import OurStory from "@/components/OurStory";
import CustomerReview from "@/components/CustomerReview";
import Categories from "@/components/Categories";
import SkinCareCategory from "@/components/SkinCareCategory";
import TrendingProduct from "@/components/TrendingProduct";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";
import Welcome from "@/components/welcome";
  
  
  export default function Home() {
    // const [featureCategory,setFeatureCategoy] = useState("tablets")
    // const [featureCategory, setFeatureCategory] = useState<{
    //   id: string;
    //   name: string;
    // }>({
    //   id: "",
    //   name: "tablet",
    // });
  
    return (
      <>
        <Hero />
        {/* <TopSellingProducts props={{name:"topselling-products"}} /> */}
        <Categories />
        <ExtraBanner/>
        <SkinCareCategory />
        {/* <BrandSection /> */}
        {/* <ProductCategory /> */}
        {/* <NewProducts props={{name:"new-products"}} /> */}
        {/* <OurStory/> */}
        <TrendingProduct/>
        <Welcome/>
        <Testimonials />

        <CustomerReview/>
        <OfferBanner />
        <LatestBlogs />
        {/* <InspiredProducts props={{name:"inspired-products"}} /> */}
      </>
    );
  }
  