import React from 'react';
import Button from 'Common/Button';
import TextField from 'Common/TextField';
import classes from './index.less';

class Login extends React.Component {
  state = {
    password: '',
    userName: '',
  };

  handleClick = (event) => {
    console.log(this.state);
  }

  handlePasswordChange = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  }

  handleUsernameChange = (event) => {
    this.setState({
      ...this.state,
      userName: event.target.value,
    });
  }

  render() {
    return (
      <div className={classes.root}>
        <div className={classes.loginBox}>
          <TextField
            label="Username"
            onChange={this.handleUsernameChange}
          />
          <TextField
            label="Password"
            onChange={this.handlePasswordChange}
            type="password"
          />
          <Button
            name="登 录"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  } 
}

export default Login;
