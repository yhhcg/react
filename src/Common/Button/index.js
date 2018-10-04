import React from 'react';
import {
  func,
  string,
} from 'prop-types';
import classes from './index.less';

class Button extends React.Component {
  static propTypes = {
    name: string.isRequired,
    onClick: func,
  };

  render() {
    const {
      name,
      onClick,
    } = this.props;

    return (
      <div
        className={classes.loginButton}
        onClick={onClick}
      >
        {name}
      </div>
    );
  }
}

export default Button;
