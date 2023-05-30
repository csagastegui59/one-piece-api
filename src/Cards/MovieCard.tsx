// import { useNavigate } from "react-router-dom";
import { MovieData } from "../Interfaces/MoviesInterface";
import { Link } from "react-router-dom";
interface MovieProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieProps) {
  // const navigate = useNavigate();

  // const handleOnClick = () => {
  //   navigate(`/movies/${movie.mal_id}`);
  // };

  return (
    <Link to={`/movies/${movie.mal_id}`}>
      <div className="border rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-200 flex drop-shadow h-[200px]">
        <img
          className="w-4/12 object-cover object-center"
          src={movie.images.jpg.image_url}
          alt={movie.title}
        />
        <div className="w-8/12 p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
          <p className="flex gap-1 text-gray-500 self-end">
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
            {movie.duration}
          </p>
        </div>
      </div>
    </Link>
  );
}
