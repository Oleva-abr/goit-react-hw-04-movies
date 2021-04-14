import React, { Component } from 'react';
import * as API from '../service/MovieApi';
import MoviesList from '../components/MovieList/MovieList';

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
        <MoviesList films={films} />
      </>
    );
  }
}
