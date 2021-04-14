import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/Header';
import MoviesPage from './views/MoviesPage';
import React, { Component } from 'react';
import routes from './routes/mainRoute';
import MovieDetailsPage from './views/MovieDetailsPage';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </>
    );
  }
}
