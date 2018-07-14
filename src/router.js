import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AppFrame from './appFrame';
import Login from './login';

class Router extends React.Component {
  render() {
    return (
      <AppFrame>
        <BrowserRouter>
          <Route exact path='/' component={Login} />
        </BrowserRouter>
      </AppFrame>
    );
  }
}

export default Router;
