import React from 'react'
import { useState,useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import '../styles/row.css'
import movieTrailer from 'movie-trailer'
const img_base_url = "https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl, isRowLarge}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
       async function fetchData(){
           const request = await axios.get(fetchUrl)
        //    console.log(request.data.results)
           setMovies(request.data.results)
           return request
       }
       fetchData()
    }, [fetchUrl])
    // console.table(movies)
    const opts = {
        height: '390',
        width: '100%',
        playerVars:{
            autoplay: 1,
        }
    }
    const style ={
        width: '100%',
        margin: '0 auto'
    }
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || '').then(url =>{
                const  urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
                console.log('this is the url>>' ,urlParams.get('v'))
            }).catch(err => console.log('this is the error >>',err))
        }
    }
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map((movie)=>(
                    <img 
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    src={`${img_base_url}${isRowLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    className={`row__poster ${isRowLarge && 'row__posterLarge'}`}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  style={style} /> }
        </div>
    )
}

export default Row
