import { useParams, Link } from "react-router-dom"
import { CharacterDataI } from "../Interfaces/CharacterInterface"

interface CharacterProps {
  character: CharacterDataI
}

export default function CharacterCard({ character: { character }} : CharacterProps) {
  const { movieId } = useParams()

  return (
    <Link to={`/movies/${movieId}/characters/${character.mal_id}`}>
      <div className="rounded-2xl border-2 shadow-xl bg-gray-200">
        <img 
          src={character.images.jpg.image_url}
          alt={character.name + ' image'}
          title={character.name}
          className="rounded-2xl"
          />
        <p className="text-2xl p-2 text-center">{character.name}</p>
      </div>
    </Link>
  )
}
