import HomePage from "./MovieApp/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MoviesDetails from "./MovieApp/Pages/MoviesDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies/:movieId' element={<MoviesDetails />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
