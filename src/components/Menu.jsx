import React from 'react'
import { FilterSection } from "../components";
import  img1  from '../assets/img/img1.webp';

 
const Menu = () => {
  return (
   
    
    <div>
     <img src={img1}  alt="Description of Image" style={{ margin: 'auto', display: 'block' }} />
      <FilterSection />
    </div>
  );
};

export default Menu;