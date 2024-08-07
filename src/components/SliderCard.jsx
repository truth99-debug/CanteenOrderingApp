import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClcik } from "../animations";
import { addNewItemToCart, getAllCartItems } from "../api";
import {  IoBasket } from "../assets/icons";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { HiCurrencyRupee  } from "react-icons/hi2";
import { MdMoney } from 'react-icons/md';



const SliderCard = ({ data, index }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sendToCart = (data) => {
    console.log(" sendToCart cart data" , data)
    //dispatch(alertSuccess("Added to the cart"));
    dispatch(setCartItems(data));
  };

  useEffect(() => {
    console.log(data)
},[])

  return (

    <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
      <img src={data.image} className="w-40 h-40 object-contain" alt="" />
      <div className="relative pt-12">
        <p className="text-xl text-headingColor font-semibold">
          {data.name}
        </p>
       
        <p className="text-lg font-semibold text-green-500 flex items-center justify-center gap-1">
          {"R"}{parseFloat(data.price).toFixed(2)}
        </p>

        <motion.div
          {...buttonClcik}
          onClick={() => {sendToCart(data)}}
          className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
        >
          <IoBasket className="text-2xl text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
