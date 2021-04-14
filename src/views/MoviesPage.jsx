import React, { Component } from 'react';
import * as API from '../service/MovieApi';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import queryString from 'query-string';

export class MoviesPage extends Component {
  state = {
    films: [],
    query: '',
    error: null,
  };
  componentDidMount() {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    query &&
      API.movieInfo(query).then(results => {
        this.setState({ films: results });
      });
  }
  handleSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    API.movieInfo(query)

      .then(results => {
        this.setState({ films: results });
      })
      .catch(error => console.log(error));

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    const { films } = this.state;
    const isShowMovies = films.length > 0;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {isShowMovies && (
          <MovieList location={this.props.location} films={films} />
        )}
      </>
    );
  }
}

export default MoviesPage;
