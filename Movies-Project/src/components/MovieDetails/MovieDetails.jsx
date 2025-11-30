import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
export default function MovieDetails() {
  const param = useParams();
  const [movie, setMovie] = useState([])

  //Get  Movie By Details 
  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    setMovie(res.data)
  }
  useEffect(() => {
    const fetchMovieDetails = async () => {
      await getMovieDetails();
    }
    fetchMovieDetails();
  });
  return (
    <div className="w-full">
      <div className="flex justify-center mt-4">
        <div className="h-[370px] rounded-[20px] bg-[#f8f8f8] flex items-center w-full max-w-5xl px-4">
          <img
            className="h-[360px] p-[10px] rounded-[20px] w-[30%] object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="ascad"
          />

          <div className="flex flex-col justify-center text-center mx-auto space-y-2">
            <p className="text-[#555555] font-[Almarai] text-[28px] font-bold leading-[49px] border-b border-gray-300">
              اسم الفيلم: {movie.title}
            </p>
            <p className="text-[#555555] font-[Almarai] text-[28px] font-bold leading-[49px] border-b border-gray-300">
              تاريخ الفيلم :{movie.release_date}
            </p>
            <p className="text-[#555555] font-[Almarai] text-[28px] font-bold leading-[49px] border-b border-gray-300">
              عدد المقيمين : {movie.vote_count}
            </p>
            <p className="text-[#555555] font-[Almarai] text-[28px] font-bold leading-[49px] border-b border-gray-300">
              التقييم :{movie.vote_average}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-1">
        <div className="h-[300px] rounded-[20px] bg-[#f8f8f8] flex flex-col items-start w-full max-w-5xl mt-4">
          <div className="text-right p-4 w-full ">
            <p className="text-[#555555] font-[Almarai] text-[36px] font-bold leading-[49px] border-b border-gray-300">
              القصة:
            </p>
          </div>
          <div className="text-right px-2 w-full">
            <p className="text-[#555555] font-[Almarai] text-[18px] leading-[32px]">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <div className="flex justify-center w-full max-w-3xl">

          <a href={movie.homepage} >
            <button
              className="bg-[#b45b35] border-0 text-white px-4 py-2 rounded-md mx-2 cursor-pointer"
            >
              مشاهده الفيلم
            </button>
          </a>
          <Link to="/">
            <button
              className="bg-[#b45b35] border-0 text-white px-4 py-2 rounded-md mx-2 cursor-pointer"
            >
              عوده للرئيسيه
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

