import { useEffect, useState } from "react"
import { MovieCard } from "./moviecard";
import axios from "axios";

export const Upcoming=()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        loadMovies();
    },[]);
    const loadMovies=()=>{
        setLoading(true);
        axios.get("https://yts.mx/api/v2/list_upcoming.json").then(res=>{
            setMovies(res.data.movies);
        })
        setLoading(false);
    }
    return(
        <>
            <div className="text-area">
                Upcoming YIFY Movies
            </div>
            <div className="movies-area">
            {
                loading? <div>Loading</div>:
                movies.map((v,key)=>
                    <MovieCard movie={v} key={key}/>                  
                )
            }
            </div>
        </>
    )
}
