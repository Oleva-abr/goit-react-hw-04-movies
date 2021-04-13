import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../service/MovieApi';
import routes from '../routes/mainRoute';
// import MoviesPage from './MoviesPage';
// import MoviesList from '../components/MovieList/MovieList';

export default class HomePage extends Component {
  state = {
    films: [],
  };
  async componentDidMount() {
    const response = await API.popularFilms();

    this.setState({ films: response });
  }

  render() {
    // console.log(this.props.match.url);
    const { films } = this.state;
    return (
      <>
        <h1> Trending this week</h1>

        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`${routes.movies}/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
