import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import AppFrame from './AppFrame';
import Home from './home';
import Login from './login';

// <Switch> is unique in that it only renders one route.
// When exact is true, will only match
// if the path matches the location.pathname exactly.
class Router extends React.Component {
  render() {
    return (
      <AppFrame>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </AppFrame>
    );
  }
}

export default Router;
