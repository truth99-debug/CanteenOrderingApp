import {useEffect, useState} from "react";
import MealItem from "./MealsItem";
import Grid from "@mui/material/Grid";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    const [grabAndGo , setGrabAndGo] = useState([]);
    const [breakfast , setBreakfast] = useState([]);
    const [smoothies , setSmoothies] = useState([]);
    const [Wraps , setWraps] = useState([]);
    const [Salads , setSalads] = useState([]);
    const [MOTD , setMOTD] = useState([]);

    useEffect(() => {
        fetch("/api/mealitems/getMealItems" ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setLoadedMeals(data)
        })
     }, []);
     
     
    useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "GrabandGo"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setGrabAndGo(data)
        })
     }, []);

     useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "Breakfast"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setBreakfast(data)
        })
     }, []);

     useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "smoothies"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setSmoothies(data)
        })
     }, []);
     useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "Wraps"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setWraps(data)
        })
     }, []);
     useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "Salads"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setSalads(data)
        })
     }, []);
     useEffect(() => {
        fetch("/api/mealitems/getByCategory" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({category : "MOTD"})
        } ).then((response) => {
          if(response.ok){
            return response.json()
          }
        }).then((data) => {
          setMOTD(data)
        })
     }, []);

    return (
        <>

            <section className="grabNGo" id="grabNGo">
                <h2>Grab and Go</h2>
                <ul id="meals">
                    {grabAndGo?.map((meal) => {
                        console.log(meal)
                        return (<MealItem key={meal.id} meal={meal}/>)
                    }
                      )}
                </ul>
            </section>
            <section className="breakfast" id="breakfast">
                <h2>Breakfast</h2>
                <ul id="meals">
                    {breakfast?.map((meal) => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            </section>
            <section className="smoothies" id="smoothies">
                <h2>Smoothies</h2>
                <ul id="meals">
                    {smoothies?.map((meal) => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            </section>
            <section className="Wraps" id="Wraps">
                <h2>Wraps</h2>
                <ul id="meals">
                    {Wraps?.map((meal) => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            </section>
            <section className="Salads" id="Salads">
                <h2>Salads</h2>
                <ul id="meals">
                    {Salads?.map((meal) => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            </section>
            <section className="MOTD" id="MOTD">
                <h2>MOTD</h2>
                <ul id="meals">
                    {MOTD?.map((meal) => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            </section>
        </>
    )
}