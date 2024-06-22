import React, { useEffect, useState } from 'react'
import './Jokes.css'
const Jokes = () => {
    const [jokes,setJokes]=useState(" ");
    const [isLoading,setIsLoading]=useState(true);
    const FetchJokes=async()=>{
        setIsLoading(true);
        const res=await fetch("https://api.chucknorris.io/jokes/random");
        const data=await res.json();
        console.log(data);
        setJokes(data);
        setIsLoading(false);
    };
    useEffect(()=>{
        FetchJokes()
    },[]);
  return (
    <>
    <div className='jokeapp'>
    <h1>Random Jokes Generate 😂 😂 </h1>
    {isLoading? <h3>Loading...</h3> : <p>{jokes.value} </p>}
    <button onClick={FetchJokes}>Generate New Joke</button>
    </div>
   </>
  )
}

export default Jokes;
