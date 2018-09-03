import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import AppFrame from './appFrame';
import Home from './home';
import Login from './login';

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
