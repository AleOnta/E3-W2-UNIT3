import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./assets/components/TvShows";
import NavbarComponent from "./assets/components/NavBar";
import FooterComponent from "./assets/components/FooterComponent";
import MovieDetails from "./assets/components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
