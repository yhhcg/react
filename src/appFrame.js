import {
  default as React,
  Fragment,
} from 'react';

import CssBaseline from 'Common/CssBaseline';

class AppFrame extends React.Component {
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
        <div>
          AppFrame
          <div>
            {children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFrame;
