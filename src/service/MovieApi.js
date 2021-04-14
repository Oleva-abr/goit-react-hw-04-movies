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

export const movieDetails = movieId =>
  axios
    .get(`${URL}/movie/${movieId}?api_key=${KEY}`)
    .then(({ data }) => data)
    .catch(error => error);

export const movieInfo = (searchQuery = 'batman') =>
  axios
    .get(`${URL}/search/movie?query=${searchQuery}&api_key=${KEY}`)
    .then(({ data }) => data.results)

    .catch(error => error);

export const Cast = movieId =>
  axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}`);

export const Reviews = movieId =>
  axios.get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}`);
