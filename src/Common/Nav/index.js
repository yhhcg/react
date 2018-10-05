import React from 'react';
import {
  arrayOf,
  func,
  shape,
  string,
} from 'prop-types';
import classNames from 'classnames';
import classes from './index.less';

class Nav extends React.Component {
  static propTypes = {
    data: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
    })),
    onClick: func,
    selectedId: string,
  };

  static defaultProps = {
    data: [],
  };

  handleClick = (item) => () => {
    const {
      onClick,
    } = this.props;

    onClick && onClick(item);
  };

  render() {
    const {
      data,
      selectedId,
    } = this.props;

    return (
      <nav className={classes.root}>
        <ul>
          {
            data.map((item) => (
              <li
                className={classNames({
                  [classes.selected]: item.id === selectedId,
                })}
                key={item.id}
                onClick={this.handleClick(item)}
              >
                {item.name}
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
