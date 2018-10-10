import React, {
  Fragment,
} from 'react';
import {
  node,
  object,
} from 'prop-types';
import {withRouter} from 'react-router'
import CssBaseline from 'Common/CssBaseline';
import Nav from 'Common/Nav';
import classes from './index.less';
import logoIcon from './logo.png';

class AppFrame extends React.Component {
  static propTypes = {
    children: node,
    history: object,
    location: object,
  };

  nav = [{
    id: 'home',
    name: '首页',
    path: '/home',
  }, {
    id: 'list',
    name: '任务管理',
    path: '/list',
  }];

  constructor(props) {
    super(props);

    const {
      location,
    } = this.props;

    this.state = {
      selectedId: location.pathname.match(/^\/(.+)$/)[1],
    };
  }

  handleNavClick = ({id, path}) => {
    const {
      history,
    } = this.props;

    this.setState({
      selectedId: id,
    });

    history.push(path);
  };

  render() {
    const {
      children,
    } = this.props;

    const {
      selectedId,
    } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.header}>
            <img
              alt=""
              className={classes.logo}
              src={logoIcon}
            />
            <Nav
              data={this.nav}
              onClick={this.handleNavClick}
              selectedId={selectedId}
            />
          </div>
          <div>
            {children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(AppFrame);
