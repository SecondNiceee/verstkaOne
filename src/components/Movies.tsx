import { type FC } from "react";
import type { TMovie } from "../types/movie/TMovie.type";
import Movie from "./Movie";

interface IMovies {
  movies: TMovie[];
}
const Movies: FC<IMovies> = ({ movies }) => {

  return (
    <div className="grid grid-cols-1 480:grid-cols-2 md:grid-cols-4 gap-4 container py-6">
      {movies.length ? movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      )) : 
      <p className="text-black text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans mx-auto">Not Founded</p>
       }
    </div>
  );
};

export default Movies;
