import React, { Component, lazy } from 'react';
import * as API from '../service/MovieApi';
import style from './viewsStyle/movieDetailsPage.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../routes/mainRoute';
import { Route, Switch } from 'react-router';
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Review'));
// import Cast from '../components/Cast';
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

    this.setState({ ...response });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    // if (location.state && location.state.from) {
    //   history.push(location.state.from);
    // } else {
    //   history.push(routes.home);
    // }
    history.push(location?.state?.from || routes.home);
  };
  render() {
    const { genres, overview, poster_path, title, vote_average } = this.state;
    const { match, location } = this.props;

    // console.log(match);
    console.log(location);
    // const locationFrom = location.state.from;
    // console.log(location);
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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                : `http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-article.png`
            }
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
        <ul className={style.listReview}>
          <li>
            <NavLink
              className={style.navItem}
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state?.from, id: match.params.movieId },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.navItem}
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state?.from, id: match.params.movieId },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path={`${match.url}/cast`} component={Cast} />
        </Switch>
        <Route exact path={`${match.url}/reviews`} component={Reviews} />
      </section>
    );
  }
}
