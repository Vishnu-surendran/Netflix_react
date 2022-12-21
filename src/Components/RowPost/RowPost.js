import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imgUrl,API_KEY } from '../../constants/constants'

import axios from '../../axios'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlid]=useState('')
  useEffect(() => {
axios.get(props.url)
  .then((Response)=>{
    setMovies(Response.data.results)
console.log(Response.data.results[0].backdrop_path);
  }).catch((error)=>{
    alert('network error')
  })
 
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
const handleMOvie=(id)=>{
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
if(Response.data.results.length!==0){
  setUrlid(Response.data.results[0])
  console.log(Response);
}else{
  console.log('arrayempty');
}
}).catch((error)=>{
  console.log('Trailer Not available');
})
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
{movies.map((movie)=>
  <img onClick={()=>handleMOvie(movie.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imgUrl+movie.backdrop_path}`} alt="" />
)}
       </div>
       {urlId &&  <YouTube opts={opts} videoId={urlId.key}/>}
    
    </div>
  )
}

export default RowPost