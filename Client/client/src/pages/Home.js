import React from 'react';
import MainCentro from '../Components/MainCentro';
import { useState, useEffect } from 'react';

import axios from 'axios'
import Quote from '../Components/Citas';
import Usuarios from '../Components/Usuarios';



 const  initialQuote ={
   quote: 'Cita',
   author: 'author'
 
 }


const Home=()=>{

   const [quote, setQuote]= useState(initialQuote)
   const [loading, setLoading]= useState(false)
  const updateQuote=async()=>{
     try{
    setLoading(true)
     const url ='http://localhost:9000/api/citas';
     const res= await axios.get(url);
     const [NewQuote] = await res.data;//data ya te lo devuelve como json()
     const {quote: quote, author}= NewQuote;
     setQuote({
       quote,
       author
     })
 
    setLoading(false)
    
    }catch (err){
          console.error(err, 'error')
   }
 }
   useEffect(()=>{
    updateQuote()
  }, [])
  
   return (
     <div style={{
       display: "flex", flexDirection: "column", width: 300
    }}>
    <Usuarios/>
    <MainCentro/>
   <button onClick= {()=>updateQuote()}>Obtener citas</button>
    {/* programo la visibilidad */}
   {loading ? <h2>Loading...</h2> :  <Quote quote= {quote}/>}
   
       
      
    
     </div>
   );
   
};

export default Home






