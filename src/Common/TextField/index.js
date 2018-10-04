import React from 'react';
import {
  func,
  string,
} from 'prop-types';
import classes from './index.less';

class TextField extends React.Component {
  static propTypes = {
    label: string,
    onChange: func,
    type: string
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      label,
      onChange,
      type,
    } = this.props;

    return (
      <div className={classes.root}>
        <label>
          <div>{label}</div>
          <input
            onChange={onChange}
            type={type}
          />
        </label>
      </div>
    );
  }
}

export default TextField;
