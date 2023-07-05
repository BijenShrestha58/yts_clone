import rt from "../../assets/rt.png";
import rta from "../../assets/rta.png";
import imdb from "../../assets/imdb.png";

export const Textual=({movie})=>{
    const imdburl=`https://www.imdb.com/title/${movie.imdb_code}`;
    // const rturl=`https://www.rottentomatoes.com/m/${movie.slug}`;
    return (<>
        <div className="title">{movie.title}</div>
        <div className="title-infos">
            <div className="title-info">{movie.year}</div>
            <div className="title-info">
                {movie.genres?.map((genre, key) => (
                    <div key={key} className="genre">
                    {genre}
                    {key !== movie.genres.length - 1 && <div>/</div>}
                    </div>
                ))}
            </div>
        </div>
        <div className="qualities">
            <i>Available in:</i>
                {movie.torrents?.map((jen,key)=><div key={key} className="quality"><a href={jen.url} target="_blank">{jen.quality}.{jen.type === 'web' ? 'WEB' : jen.type === 'bluray' ? 'BluRay' : jen.type.toUpperCase()}</a></div>)} 
        </div>
        <div className="subtitles"><span class="material-icons">download</span>Download subtitles</div>
        <div className="ratings">
            <div className="rating">
                <div className="rating-image"><span class="material-icons">favorite</span></div>
                <div className="rating-text">{movie.like_count}</div>
            </div>
            <div className="rating">
                <div className="rating-image"><img src={rt}/></div>
                <div className="rating-text"></div>
            </div>
            <div className="rating">
                <div className="rating-image"><img src={rta}/></div>
                <div className="rating-text"></div>
            </div>
            <div className="rating">
            <div className="rating-image"><a href={imdburl} target="_blank"><img src={imdb}/></a></div>
                <div className="rating-text">{movie?.rating}</div>
            </div>
        </div>
    </>
    )
}