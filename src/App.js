import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/Header';
import MoviesPage from './views/MoviesPage';
import React, { Component } from 'react';

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
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
