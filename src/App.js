import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    state = {
      films: [],
    };
    return (
      //  const { films } = this.state;
      <>
        <Route exact path="/" component={HomePage} />
      </>
    );
  }
}

// const App = () => (
//   <>
//     <Route exact path="/" component={HomeView} />
//   </>
// );
// export default App;
