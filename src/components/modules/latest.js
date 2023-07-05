import { useEffect, useState } from "react"
import { MovieCard } from "./moviecard";
import axios from "axios";

export const Latest=()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        loadMovies();
    },[]);
    const loadMovies=()=>{
        setLoading(true);
        axios.get("https://yts.mx/api/v2/list_movies.json",{params:{limit: 8,sort_by:'date_added', order_by: 'desc'}}).then(res=>{
            setMovies(res.data.data.movies);
        })
        setLoading(false);
    }
    return(
        <>
            <div className="text-area">
                Latest YIFY Movies Torrents
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
