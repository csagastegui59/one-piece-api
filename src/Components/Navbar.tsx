import { Link, Outlet } from "react-router-dom";
import { onePieceLogoSVG } from "../assets/Images";

export default function Navbar() {

  return (
    <>
      <div className="sticky top-0 w-full py-8 px-6 flex flex-row justify-between z-10 bg-gradient-to-l from-black via-blue-600 to-blue-400 text-white">
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <img src={onePieceLogoSVG} alt="One Piece Logo" className="h-12" />
            <p className="text-xl underline-animation decoration-white">
              One piece API
            </p>
          </div>
        </Link>
        <Outlet />
      </div>
    </>
  );
}
