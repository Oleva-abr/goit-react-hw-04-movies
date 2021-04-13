import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/Header';
import MoviesPage from './views/MoviesPage';
import React, { Component } from 'react';
import routes from './routes/mainRoute';
// import MovieDetailsPage from './views/MovieDetailsPage';
export default class App extends Component {
  render() {
    // state = {
    //   films: [],
    // };
    return (
      //  const { films } = this.state;
      <>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movies} component={MoviesPage} />
          {/* <Route path={routes.movieDetails}  component={MovieDetailsPage} /> */}
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
