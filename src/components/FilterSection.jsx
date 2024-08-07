import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoFastFood } from "../assets/icons";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { statuses } from "../utils/styles";
import SliderCard from "./SliderCard";
import { addNewProduct } from "../api";
import axios from "axios";

const FilterSection = () => {
  const [category, setCategory] = useState("salads");
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(category)
      try {
        const baseURL = "http://localhost:8080/api";
        const response = await axios.post(`${baseURL}/mealitems/getByCategory`, { category: category });
        const productsData = response.data;
        console.log("Data from API:", category);
        setProducts(productsData);
       
      // Assuming you have an endpoint to fetch image URLs
      const imageResponse = await axios.get(`http://localhost:8089/api/v1/admin/names/2`);
      const imageNames = imageResponse.data; 

      const urls = imageNames.map(name => `http://localhost:8089/images/foodImages/${name}`);
        setImageUrls(urls);

      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData(); 
  }, [category]);

  return (
    <motion.div className="w-full flex items-start justify-start flex-col" >
      <div className=" w-full flex items-center justify-between "  >
        <div className="flex flex-col items-start justify-start gap-1" >
          <p className="text-2xl text-headingColor font-bold text-center"> Menu</p>
          <div className="w-40 h-1 rounded-md bg-green-500"></div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
        {statuses &&
          statuses.map((data, i) => (
            <FilterCard
              data={data}
              category={category}
              setCategory={setCategory}
              index={i}
              
            />
          ))}
          
      </div>

      <div className=" w-full flex items-center justify-evenly flex-wrap gap-4 mt-12 ">
        {products &&
          products.map((data, i) => <SliderCard key={i} data={data} index={i} />)}
      </div>
    </motion.div>
  );
};

export const FilterCard = ({ data, index, category, setCategory, setProducts  }) => {


  const handleCategoryChange = async (selectedCategory) => {
    try {
      console.log(selectedCategory)
      setCategory(selectedCategory);
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      onClick={() => {handleCategoryChange(data.category)}}
      className={`group w-28 min-w-[128px] cursor-pointer rounded-md  py-6 ${
        category === data.category ? "bg-green-500" : "bg-primary"
      } hover:bg-green-500 shadow-md flex flex-col items-center justify-center gap-4`}
    >
      <div
        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary ${
          category === data.category ? "bg-primary" : "bg-green-500"
        }`}
      >
        <IoFastFood
          className={`${
            category === data.category ? "text-green-500" : "text-primary"
          } group-hover:text-green-500`}
        />
      </div>
      <p
        className={`text-xl font-semibold ${
          category === data.category ? "text-primary" : "text-textColor"
        } group-hover:text-primary`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};

export default FilterSection;
