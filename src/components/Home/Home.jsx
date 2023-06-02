import "./Home.scss";
import { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api"
import { Context } from "../../utils/context";

const Home = () => {
  const{categories, setCategories, products, setProducts}= useContext(Context);
  
    useEffect(() => {
       getCategories();
    }, []);
  const getProduct = () =>{
    fetchDataFromApi ("/api/products?populate=*").then((res)=> 
    {
      console.log(res);
      setCategories(res);
    });
  }
  const getCategories = () =>{
    fetchDataFromApi ("/api/categories?populate=*").then((res)=> 
    {
      console.log(res);
      setCategories(res);
    });
  }
    return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products ={Products} headingText="Popular Products" />
         
        </div>
        
      </div>
    </div>
  );
};

export default Home;
