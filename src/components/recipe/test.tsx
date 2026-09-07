'use client'

// import { useEffect, useState } from "react"

// function Test(){
//     const [recipes, setRecipes] = useState([])

//     useEffect(()=>{
//     getRecipes()      
//     },[])
  

//     async function getRecipes(){
//           const res = await fetch('https://dummyjson.com/recipes')
//           const data = await res.json()
//            setRecipes(data.recipes)
//     }


//     if(recipes.length===0){
//         return <p>Loading recipes...</p>
//     }

//     return (
//         <div>
//             {recipes.map((recipe:any)=> <p>{recipe.name}</p>)}
            
//              </div>
//     )
// }

import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log('Component renders');
// }, []);
useEffect(() => {
  document.title = `The current count is ${count}`;
  console.log('component renders');
  
}, [count]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;