import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    // state = {
    //   films: [],
    // };
    return (
      //  const { films } = this.state;
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}
