import axios from "axios";
import type { TMovieResponse } from "../types/movie/TMovieResponse.type";
import type { TMovieTypes } from "../types/movie/TMovieTypes.type";
class Movie {
    private apiKey:string = import.meta.env.VITE_API_KEY;
    private basicUrl:string = "https://www.omdbapi.com";

    async fetchMatrix() {
        const response = await axios.get<TMovieResponse>(
          this.basicUrl, {
          params: {
            apikey: this.apiKey,
            s: "matrix",
            type: ""
          }
        })
        return response.data?.Search ?? [];
      }
    
      async searchMovies(search: string, type: TMovieTypes = "all") {
        const response = await axios.get<TMovieResponse>(
          this.basicUrl, {
          params: {
            apikey: this.apiKey,
            s: search.length ? search: "matrix",
            type: type === "all" ? "" : type
          }
        })    
        console.log(response, search, type);
        return response.data.Search ?? []
      }
}
const moviesApi = new Movie();
export default moviesApi;