import { useNavigate } from "react-router";

export const MovieCard=({movie})=>{
    const navigate=useNavigate();

    return (<div className="movie-card" onClick={()=>navigate('/movie/'+movie.id)}>
    <div className="movie-image">
        <img src={movie.medium_cover_image}/>
        <div className="movie-details">
            <div className="movie-texts">
                <div className="movie-text"> <span className="material-icons">star</span></div>
                <div className="movie-text"> {movie.rating}/10</div><br/>
                {movie.genres.map((a,key)=><div key={key} className="movie-text">{a}</div>)}
                <button>View Details</button>
            </div>    
        </div>
    </div>
    <div className="movie-title">
        <h5>{movie.title}<br/>{movie.year}</h5>
    </div>
    </div>)
    }