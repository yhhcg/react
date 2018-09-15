import React from 'react';

class AppFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        AppFrame
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default AppFrame;
