/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <div className="display">
        {value}
      </div>
    );
  }
}

Display.propTypes = { value: PropTypes.string };
Display.defaultProps = { value: '0' };

export default Display;
