import type { TMovie } from '../types/movie/TMovie.type';


const Movie = ({Poster, Title, Type, Year, imdbID}:TMovie) => {
    return (
        <div id={imdbID} className="flex flex-col shadow-xl cursor-pointer  border-black rounded-xl ">
            {
                Poster === "N/A" ? (
                <img
                    src={`https://via.placeholder.com/300x400?text=${Title}`}
                    alt="Poster"
                    className="w-full object-cover"
                />
                ) :
                <img src={Poster} alt="Poster" className="activator" />
            }
            <div className="flex flex-col justify-between px-2 gap-3 mt-auto mb-3">
                <span className="mx-auto text-xl text-black font-sans">{Title}</span>
                <p className='mx-auto text-xl text-black font-sans'>{Year} <span className="">{Type}</span></p>
            </div>
        </div>
    );
};

export default Movie;