import React from 'react'
import { FilterSection, Header , Cart } from "../components";
import  img1  from '../assets/img/img1.webp';
import {useSelector } from "react-redux";

 
const Menu = () => {
  const isCart = useSelector((state) => state.isCart);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
        <Header/>      
      <div>
        {isCart && <Cart />}

        <img src={img1}  alt="Description of Image" style={{ margin: 'auto', display: 'block' }} />
        <FilterSection />
      </div>
    </main>
  );
};

export default Menu;


