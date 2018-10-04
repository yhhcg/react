import React from 'react';
import Button from 'Common/Button';
import TextField from 'Common/TextField';
import classes from './index.less';

class Login extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.loginBox}>
          <TextField label="Username" />
          <TextField label="Password" type="password"/>
          <Button name="登 录" />
        </div>
      </div>
    );
  } 
}

export default Login;
