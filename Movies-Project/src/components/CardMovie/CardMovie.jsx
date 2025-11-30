import { Link } from "react-router-dom";
export default function CardMovie({ mov }) {
    return (
        <div className="my-1">
            <Link to={`/movie/${mov.id}`}>
                <div className="relative transition-all duration-500 ease-in cursor-pointer h-[375px]">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
                        alt="card__image"
                        className="block w-full h-full rounded-[5px]"
                    />
                    <div className="absolute inset-0 w-full h-full opacity-0 hover:opacity-80 transition duration-500 bg-[#393839]">
                        <div className="text-white text-[16px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-2">
                            <p>اسم الفيلم : {mov.original_title}</p>
                            <p>تاريخ الاصدار:{mov.release_date}</p>
                            <p>عدد المقيمين: {mov.vote_count}</p>
                            <p>التقييم:{mov.vote_average} </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
