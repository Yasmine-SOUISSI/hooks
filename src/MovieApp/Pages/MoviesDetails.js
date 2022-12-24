import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { movies } from "../Data/Data";
import { isObject } from "../Helpers/functions";

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setMovieData(movies.find((movie) => movie.id === parseInt(movieId)));
  }, [movieId]);

  return isObject(movieData) ? (
    <MovieCard movie={movieData} />
  ) : (
    <h1>Movie not found</h1>
  );
};

export default MoviesDetails;
