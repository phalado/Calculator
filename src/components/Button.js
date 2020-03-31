import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const button = (
    <button
      className="button"
      type="button"
    >
      { props.name }
    </button>
  );

  return (button);
}

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
