import React, { Component, NavLink } from 'react';
import * as API from '../service/MovieApi';
import style from './viewsStyle/movieDetailsPage.module.css';
export default class MovieDetailsPage extends Component {
  state = {
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: null,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const response = await API.movieDetails(movieId);
    console.log(response);
    this.setState({ ...response });
  }
  handleGoBack = () => {
    // const { location, history } = this.props;

    // history.push(location.state);
    this.props.history.push({
      pathname: this.state.prevPosition,
      search: 'query=batman',
    });
  };
  render() {
    const { genres, overview, poster_path, title, vote_average } = this.state;

    return (
      <section className={style.overlay}>
        <button
          className={style.button}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>

        <h1>{title}</h1>
        <div className={style.cardTthumb}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt="{title}"
          />
          <div className={style.cardText}>
            <h2>Rating: {vote_average * 10}%</h2>
            <p>{overview}</p>
            <ul className={style.genreList}>
              {genres.map(({ id, name }) => (
                <li className={style.genreItem} key={id}>
                  {name},
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
