import React, { Component } from 'react';
import {
  Route,
  Switch,
  matchPath,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import ExoplanetList from './ExoplanetList/ExoplanetList';
import ExoplanetTransitGraphs from './ExoplanetTransitGraphs/ExoplanetTransitGraphs';
import TransitObservations from './TransitObservations/TransitObservations';

const getParams = pathname => {
  const matchTransit = matchPath(pathname, {
    path: `/observations/:id`,
  });
  return (matchTransit && matchTransit.params) || {};
};

class App extends Component {
  state = {
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { pathname } = this.props.location;
    const { pathname: prevPathname } = prevProps.location;
    const currentParams = getParams(pathname);
    const prevParams = getParams(prevPathname);
    if (currentParams.profileId && currentParams.profileId !== prevParams.profileId) {
      clearTimeout(this.timeout);
      this.setState({
        loading: true,
      });
      this.timeout = setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ ExoplanetList } />
            <Route path="/transits/:id"
              render={props => {
                return <ExoplanetTransitGraphs {...props} loading={this.state.loading} />;
              }} />
            <Route path="/observations/:id"
              render={props => {
                return <TransitObservations {...props} loading={this.state.loading} />;
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
