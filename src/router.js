import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AppFrame from './AppFrame';
import Home from 'Pages/Home';
import Login from 'Pages/Login';

// <Switch> is unique in that it only renders one route.
// When exact is true, will only match
// if the path matches the location.pathname exactly.
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <AppFrame>
            <Route exact path='/home' component={Home} />
          </AppFrame>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
