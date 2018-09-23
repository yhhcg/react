import {
  default as React,
  Fragment,
} from 'react';

import CssBaseline from 'Common/CssBaseline';
import Nav from 'Common/Nav';
import classes from './index.less';

class AppFrame extends React.Component {
  nav = [{
    id: 'home',
    name: '首页',
  }, {
    id: 'list',
    name: '任务管理',
  }];

  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.header}>
            <Nav data={this.nav}/>
          </div>
          <div>
            {children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFrame;
