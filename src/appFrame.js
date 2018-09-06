import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

class AppFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <CssBaseline>
        <div>
          AppFrame
          <div>
            {children}
          </div>
        </div>        
      </CssBaseline>
    );
  }
}

export default AppFrame;
