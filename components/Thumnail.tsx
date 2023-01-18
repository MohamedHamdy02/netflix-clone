import Image from "next/legacy/image";
import { modalState, movieState } from "../atoms/modalAtoms";
import { Data } from "../typings";
import { useRecoilState } from "recoil";
import { DocumentData } from "firebase/firestore";

interface Props {
  movie: Data | DocumentData;
}

function Thumnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <>
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 flex justify-center items-center"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          property="priority"
          alt="image"
        />
        <div className="absolute text-white font-bold text-center bg-black h-full w-full flex justify-center items-center opacity-0 transition hover:opacity-70 duration-500">
          <div>
          <h6>{movie?.title || movie?.name || movie?.original_name}</h6>
          <h6>{movie?.release_date || movie?.first_air_date}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thumnail;
