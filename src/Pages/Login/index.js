import React from 'react';
import classes from './index.less';

class Login extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.loginBox}>
          <label>
            <div>Username</div>
            <input type="text" />
          </label>
          <label>
            <div>Password</div>
            <input type="password"/>
          </label>
        </div>
      </div>
    );
  }
}

export default Login;
