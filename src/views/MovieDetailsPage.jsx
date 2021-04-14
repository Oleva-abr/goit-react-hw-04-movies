import React, { Component } from 'react';
import * as API from '../service/MovieApi';

export default class MovieDetailsPage extends Component {
  state = {
    films: [],
  };
  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;
  //   const response = await API.movieDetails(movieId);

  //   console.log(response);
  //   this.setState({ films: response });
  // }
  render() {
    return (
      <section>
        <h1>One Book</h1>
        <button type="button"></button>
        <img src="" alt="" />
      </section>
    );
  }
}
