import React from 'react';

import classes from './index.less';

class Nav extends React.Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const {
      data,
    } = this.props;

    return (
      <nav className={classes.root}>
        <ul>
          {
            data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
