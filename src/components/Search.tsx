import { useState, type FC, type SetStateAction } from "react";
import moviesApi from "../api/movie";
import { retryFetch } from "../utils/retryFetch";
import type { TMovie } from "../types/movie/TMovie.type";
import type { TFetchStatus } from "../types/common/TFetchStatus";
import type { TMovieTypes } from "../types/movie/TMovieTypes.type";

interface ISearch{
    setMovies : React.Dispatch<SetStateAction<TMovie[]>>
    setFetchMovieStatus : React.Dispatch<SetStateAction<TFetchStatus>>
}
const Search:FC<ISearch> = ({setMovies, setFetchMovieStatus}) => {

    const [search, setSearch] = useState('');

    const [type, setType] = useState<TMovieTypes>("all");

    const fetchSearchMovies = (search : string, type : TMovieTypes) => {
        setFetchMovieStatus("pending");
        retryFetch(moviesApi.searchMovies.bind(moviesApi, search, type)).then((movies) => {
            setMovies(movies);
            setFetchMovieStatus("fulfilled");
        } ).catch((err) => {
            console.warn(err);
            setFetchMovieStatus("rejected");
        })
    }

    const typeChanger = (type:TMovieTypes) => () => {
        setType(type);
        fetchSearchMovies(search, type);
    }

    const onKeyDownHandler:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter"){
            fetchSearchMovies(search, type);
        }
    }
    return (
        <div className='flex flex-col gap-5 mt-4'>
            <div className="flex flex-col relative">
                <input onKeyDown={onKeyDownHandler} onChange={(e) => {setSearch(e.target.value)}} className='w-full focus:border-none border-black p-2 border-2 border-solid shadow-sm rounded-lg text-xl' placeholder='Search' type="text" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 h-[80%]  px-5 bg-black text-white text-xl font-sans rounded-lg w-fit" onClick={() => {fetchSearchMovies(search, type)}}>Search</button>
            </div>
            <div className='flex gap-11'>
                <label className="flex gap-2" htmlFor="all">
                    <input name="fileType" defaultChecked onChange={typeChanger("all")} id='all' type="radio" />
                    <p>All</p>
                </label>
                <label className="flex gap-2" htmlFor="movies">
                    <input name="fileType" onChange={typeChanger("movie")} id='movies' type="radio" />
                    <p>Movies only</p>
                </label>
                <label className="flex gap-2" htmlFor="series">
                    <input name="fileType" onChange={typeChanger("series")} id='series' type="radio" />
                    <p>Series only</p>
                </label>
            </div>
        </div>
    );
};

export default Search;