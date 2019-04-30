import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import ExoplanetList from './ExoplanetList/ExoplanetList';
import ExoplanetTransitGraphs from './ExoplanetTransitGraphs/ExoplanetTransitGraphs';
import TransitObservations from './TransitObservations/TransitObservations';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={ ExoplanetList } />
          <Route exact path='/transits' component={ ExoplanetTransitGraphs } />
          <Route exact path='/observations' component={ TransitObservations } />
        </Router>
      </div>
    );
  }
}

export default App;
