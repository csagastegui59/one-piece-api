import { useEffect, useState } from "react";
import { Results } from "../Interfaces/MoviesInterface";
import MovieCard from "../Cards/MovieCard";
import Loader from "../Components/Loader";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Results>();
  const url = 'https://api.jikan.moe/v4/anime?q=one+piece&type=Movie'
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMovies(){
      try{
        const response = await fetch(url)
        if (response.status === 200) {
          const data = await response.json()
          setMovies(data)
        } else {
          setError('No movie found with given Id');
        }
      } catch (error) {
        setError('No movie found with given Id')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) {
    return <Loader/>;
  }

  if (!movies) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className="grid grid-cols-3 gap-x-10 gap-y-10 px-10 py-10">
      {movies.data.map((movie) => (
        <MovieCard
          key={movie.mal_id}
          movie={movie}
        />
      ))}
    </div>
    </>
  )
}
