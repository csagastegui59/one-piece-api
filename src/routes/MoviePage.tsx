import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FullMovieData } from "../Interfaces/MovieInterface"
import { CharacterData } from "../Interfaces/CharacterInterface"
import CharacterCard from "../Cards/CharacterCard"
import Loader from "../Components/Loader"

export default function MoviePage() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<FullMovieData | null>(null)
  const [characters, setCharacters] = useState<CharacterData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const movieUrl = `https://api.jikan.moe/v4/anime/${movieId}/full`
  const charactersUrl = `https://api.jikan.moe/v4/anime/${movieId}/characters`
  
  useEffect(() => {
    async function fetchData() {
      try {
        const [movieResponse, charactersResponse] = await Promise.all([
          fetch(movieUrl),
          fetch(charactersUrl)
        ]);

        if (movieResponse.status === 200 && charactersResponse.status === 200) {
          const movieData = await movieResponse.json()
          const charactersData = await charactersResponse.json()
          setMovie(movieData)
          setCharacters(charactersData)
        } else {
          setError('An error occurred');
        }
      } catch (error) {
        setError('An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [movieUrl, charactersUrl]);

  if (loading) {
    return <Loader/>;
  }

  if(!movie) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="p-10 flex flex-col gap-20">
      <div className="flex bg-white rounded-2xl">
        <img className="w-3/12 object-contain rounded-2xl" src={movie.data.images.jpg.image_url}/>
        <div className="flex flex-col justify-between p-8">
          <div className="flex flex-col">
            <h2 className="text-4xl">{movie.data.title}</h2>
            <p className="text-gray-500">{movie.data.rating}</p>
            <p className="mt-4 text-lg">{movie.data.synopsis}</p>
          </div>
          <div className="flex gap-10 justify-end">
            <p className="text-lg flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
              {movie.data.duration}
              </p>
            <p className="text-lg flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              {movie.data.score}</p>
          </div>
        </div>

      </div>
      <div className="rounded-2xl px-10 py-8 bg-white">
        <h2 className="text-4xl mb-10">Personajes</h2>
        {characters?.data.length != 0 ?
          <div className="grid grid-cols-5 gap-y-10 place-items-center">
            {characters?.data.map((character) => (
              <CharacterCard
                character={character}
              />
            ))}
          </div> 
          :
            <p>No characters found</p>
        }
      </div>
    </div>
  )
}
