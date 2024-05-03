import React, { useState, useEffect, useContext } from 'react';
import { currencyFormatter } from '../utils/formatting';


const  MealItem = (props) => {
 const [mealItems, setMealItems] = useState([]);
 


 return (
  <li className="meal-item">
  <article>
      <img src={`http://localhost:3000/${props.meal.image}`} alt={props.meal.name}/>
      <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(props.meal.price)}</p>
          <p className="meal-item-description">{props.meal.description}</p>
      </div>
      <p className="meal-items-actions">
         
      </p>
  </article>
</li>
 );
}

export default MealItem;
