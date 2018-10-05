import {
  default as React,
  Fragment,
} from 'react';
import {withRouter} from 'react-router'
import CssBaseline from 'Common/CssBaseline';
import Nav from 'Common/Nav';
import classes from './index.less';
import logoIcon from './logo.png';

class AppFrame extends React.Component {
  state = {
    selectedId: '',
  };

  nav = [{
    id: 'home',
    name: '首页',
  }, {
    id: 'list',
    name: '任务管理',
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

  handleNavClick = ({id}) => {
    const {
      history,
    } = this.props;

    this.setState({
      ...this.state,
      selectedId: id,
    });

    history.push(`/${id}`);
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
            <img className={classes.logo} src={logoIcon} />
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
