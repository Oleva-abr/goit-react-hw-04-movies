import axios from 'axios';
//api.themoviedb.org/3/trending/all/week?api_key=cbca180a8e271793e5e6f498a709d8ac
//api.themoviedb.org/3/movie/{movie_id}?api_key=cbca180a8e271793e5e6f498a709d8ac&language=en-US
//api.themoviedb.org/3/search/movie?api_key=cbca180a8e271793e5e6f498a709d8ac&language=en-US&page=1&include_adult=false
//api.themoviedb.org/3/movie/{movie_id}/credits?api_key=cbca180a8e271793e5e6f498a709d8ac&language=en-US
//api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=cbca180a8e271793e5e6f498a709d8ac&language=en-US&page=1
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

const URL = 'https://api.themoviedb.org/3';
const KEY = 'cbca180a8e271793e5e6f498a709d8ac';

export const popularFilms = () =>
  axios
    .get(`${URL}/trending/movie/week?api_key=${KEY}`)
    .then(({ data }) => data.results)
    .catch(error => error);

export const searchInfo = id =>
  axios
    .get(`${URL}/movie/${id}?api_key=${KEY}`)
    .then(({ data }) => data.results)
    .catch(error => error);

export const movieInfo = (query = 'batman') =>
  axios.get(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
export const Cast = id =>
  axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}`);

export const Reviews = id =>
  axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}`);
