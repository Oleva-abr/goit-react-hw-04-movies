import React, { Component } from 'react';
import * as API from '../service/MovieApi';

export default class HomePage extends Component {
  state = {
    films: [],
  };
  async componentDidMount() {
    const response = await API.popularFilms();
    // .then(resData => {
    // console.log(resData);
    this.setState({ films: response });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1> Popular movies</h1>
        <ul>
          {films.map(film => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
