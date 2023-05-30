import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesPage from "./routes/MoviesPage";
import MoviePage from "./routes/MoviePage";
import CharacterPage from "./routes/CharacterPage";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <MoviesPage />
      </div>
    ),
  },
  {
    path: "/movies/:movieId",
    element: (
      <div>
        <Navbar />
        <MoviePage />
      </div>
    ),
  },
  {
    path: "/movies/:movieId/characters/:characterId",
    element: (
      <div>
        <Navbar />
        <CharacterPage />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
