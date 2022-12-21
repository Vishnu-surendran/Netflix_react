import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_KEY,imgUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie, setMOvie] = useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
.then((Response)=>{
  setMOvie(Response.data.results[3])
console.log(Response.data.results[6]);
})
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path:''})`}}
    className='banner'>
       <div className='content' >
           <h1 className='title'>{movie ? movie.title:'nothing'}  </h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{movie ? movie.overview:''}</h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  )
}

export default Banner