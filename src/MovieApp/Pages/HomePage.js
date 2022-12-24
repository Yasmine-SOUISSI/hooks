import { useState } from "react";
import AddMovieModal from "../Components/AddMovieModal";
import MovieList from "../Components/MovieList";
import NavBar from "../Components/NavBar";
import { movies } from "../Data/Data";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState(movies);
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar setSearch={setSearch} />
      <MovieList
        search={search}
        moviesData={moviesData}
        setMoviesData={setMoviesData}
      />
      <AddMovieModal moviesData={moviesData} setMoviesData={setMoviesData} />
    </>
  );
};

export default HomePage;
