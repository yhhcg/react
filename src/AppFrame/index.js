import React from 'react';
import {
  node,
} from 'prop-types';
import {withRouter} from 'react-router'

class AppFrame extends React.Component {
  static propTypes = {
    children: node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        <div>AppFrame</div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(AppFrame);
