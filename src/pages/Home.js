import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import { MovieCard } from "../components/modules/moviecard";
import { Latest } from "../components/modules/latest";
import { Upcoming } from "../components/modules/upcoming";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [Upcoming,setUpcoming]= useState([]);
  useEffect(() => {
    loadMovies();
  }, []);
  const loadMovies = () => {
    setLoading(true);
    axios
      .get("https://yts.mx/api/v2/list_movies.json", {
        params: {
          page: 1,
          sort_by: "download_count",
          order_by: "desc",
          limit: 4,
          with_rt_ratings: true,
        },
      })
      .then((res) => {
        setMovies(res.data.data.movies);
      });

    setLoading(false);
  };

  return (
    <>
      <section>
        <div className="text-area">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>
            Welcome to the official YTS.MX website. Here you can browse and
            download YIFY movies in excellent
          </p>
          <p>
            720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size.
            YTS Movies Torrents.
          </p>
          <a>
            IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
          </a>
          <div className="links">
            <img src={telegram} />
            <a>YTSMX_UPDATES </a>
            <div className="line"></div>
            <img src={twitter} />
            <a>Upcoming:</a>
          </div>
          <div className="title">
            <span className="material-icons">star</span>Popular Downloads
          </div>
        </div>
        <div className="separation-line"></div>
        <div className="movies-area">
          {loading ? (
            <div>Loading</div>
          ) : (
            movies.map((v, key) => <MovieCard movie={v} key={key} />)
          )}
        </div>
      </section>
      <div className="latest">
        <Latest />
      </div>
      <div className="latest" style={{ backgroundColor: "#1d1d1d" }}>
        {/* <Upcoming/> */}
      </div>
    </>
  );
};
