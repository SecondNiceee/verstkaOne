import { useEffect, useMemo, useState } from "react";
import type { TMovie } from "../../types/movie/TMovie.type.ts";
import moviesApi from "../../api/movie.ts";
import Movies from "../../components/Movies.tsx";
import Loader from "../../components/Loader.tsx";
import Error from "../../components/Error.tsx";
import { retryFetch } from "../../utils/retryFetch.ts";
import type { TFetchStatus } from "../../types/common/TFetchStatus.ts";
import Search from "../../components/Search.tsx";

const Main = () => {

    const [movies, setMovies] = useState<TMovie[]>([]);
    const [fetchMovieStatus, setFetchMovieStatus] = useState<TFetchStatus>("pending");


    const fetchMovies = async () => {
        retryFetch(moviesApi.fetchMatrix.bind(moviesApi), 3, 500 ).then((movies) => {
            setMovies(movies);
            setFetchMovieStatus("fulfilled");
        }).catch((err) => {
            console.warn(err);
            setFetchMovieStatus("rejected")
        });
    }

    useEffect( () => {
        fetchMovies();
    } , [] )

    const RenderBlock = useMemo( () => {
        switch(fetchMovieStatus){
            case "fulfilled":
                return <Movies movies={movies} />
            case "pending":
                return <Loader  />
            case "rejected":
                return <Error />
            default : 
                return <Loader />
        }
    }, [fetchMovieStatus, movies] )

    return (
        <div className="flex flex-col container min-h-[calc(100vh-126px)] relative">
            <Search setFetchMovieStatus={setFetchMovieStatus} setMovies={setMovies} />
            {RenderBlock}
        </div>
    );
};

export default Main;