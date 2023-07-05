import "../MovieDetails.scss"
import { useEffect, useState } from "react"
import axios from "axios";
import { Nav } from "../components/partials/nav";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/modules/moviecard";
import { Textual } from "../components/modules/textual";
import playbutton from "../assets/play-button.png"
import { DialogBox } from "../components/modules/dialogbox";
import { DownloadBox } from "../components/modules/downloadbox";

export const MovieDetails=()=>{
    const [movie, setMovie] = useState({torrents:[]});
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const downloadBoxStyles={
        marginTop: '10vh',
        height: '80%',
        width:'40%',
        padding:'32px',
        overflow:'auto',

    };
    const navigate= useNavigate();
    const {id} = useParams();
    const [isVisible, setIsVisible] = useState(false);
    const [isDownloadVisible, setIsDownloadVisible] = useState(false);
    const trailerurl = `https://www.youtube.com/embed/${movie.yt_trailer_code}`;

    useEffect(()=>{
        loadMovie();
    },[id]);
  
    const loadMovie=async ()=>{
        setLoading(true);
        const res =await axios.get('https://yts.mx/api/v2/movie_details.json',{params:{movie_id :id ?? '', with_cast: true, with_images: true}});
        const res2 =await axios.get('https://yts.mx/api/v2/movie_suggestions.json',{params:{movie_id :id ?? ''}});
        setMovie(res.data.data?.movie);
        setMovies(res2.data.data?.movies);
        console.log(res.data.data?.movie);
        console.log(res2.data.data?.movies);

        setLoading(false);
    }
    return <>
    <Nav/>
  
    <div className="movie-details-page">
        <section style={{ backgroundImage: `linear-gradient(rgba(60, 60, 60, 0.4), rgba(29, 29, 29, 1)), url(${movie.background_image_original})`}}>
            <div className="image-area" >
            {
            loading? <div>Loading</div>:
            <>
                <div className="image-box">
                    <div className="image"><img src={movie?.medium_cover_image}/></div>
                    <div className="button" onClick={()=>setIsDownloadVisible(true)}><button className="green"><span class="material-icons">download</span>Download</button></div>
                    <div className="button"><a><button className="blue">Watch Now</button></a></div>
                </div>
            </>}
            </div>
            <div className="text-area">
                <Textual movie={movie}/>
            </div>
            <div className="similar-area">
                <h3>Similar Movies</h3>
                <div className="similar-movies">
                {
                loading? <div>Loading</div>:
                movies?.map((v,key)=>
                    <div className="movie-image" onClick={()=>navigate('/movie/'+v.id)}>
                        <img src={v.medium_cover_image}/>
                    </div>
                )}
                </div>               
            </div>
        </section>
        <div className="section-2">
            <div className="video-frames">
                <div className="video-frame" onClick={()=>setIsVisible(true)}>
       
                    <img src={movie.medium_screenshot_image1} alt="Image not available"/>
                    <div className="play-button">
                            <img src={playbutton}/>
                            <div className="play-button-text">Trailer</div>
                        </div>
                </div>
                <div className="video-frame"><img src={movie.medium_screenshot_image2}/></div>
                <div className="video-frame"><img src={movie.medium_screenshot_image3}/></div>
            </div>
            <div className="text-area">
                <div className="summary-area">
                    <div className="title">Plot Summary</div>
                    <div className="summary">{movie.description_full}</div>
                </div>
                <div className="cast-area">
                    <div className="director">
                        <div className="title">Director</div>
                    </div>
                    <div className="cast"><div className="title">Top Cast</div>
                        <div className="cast-members">
                            {movie.cast?.map((x,key)=><>
                                <div className="cast-member">
                                    <div className="image"><a href={'https://www.imdb.com/name/nm'+ x.imdb_code } target="_blank"><img src={x.url_small_image}/></a></div>
                                    <div className="name">{x.name}&nbsp;</div>
                                    <div className="character">as {x.character_name}</div>
                                </div>
                                <div className="line"></div>
                                </>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DialogBox close={()=>setIsVisible(false)} open={isVisible}>
        <iframe src={trailerurl}></iframe>
    </DialogBox>
    <DialogBox close={()=>setIsDownloadVisible(false)} open={isDownloadVisible} styles={downloadBoxStyles}>
    <div className="download-title">Select movie quality</div>
    <div className="download-boxes">
        {movie.torrents?.map((x,key)=><>
            <DownloadBox torrent={x}/>
            </>
        )}
    </div>
    </DialogBox>
</>
}