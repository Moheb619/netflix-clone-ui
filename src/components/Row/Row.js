import axios from "./../../utils/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  function randomSortOfTheMovieList() {
    return Math.random() - 0.5;
  }
  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(fetchURL);
      const randomOrderOfMovies = res.data.results.sort(randomSortOfTheMovieList);
      setMovies(randomOrderOfMovies);
      return res;
    }
    fetchMovies();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
