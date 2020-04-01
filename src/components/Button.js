import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler } = this.props;
    const { buttonName } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const { buttonName, color, wide } = this.props;
    let nameClass = 'button';

    if (color) {
      nameClass = 'button orange';
    } else if (wide) {
      nameClass = 'button zero';
    }

    return (
      <button
        className={nameClass}
        type="button"
        onClick={this.handleClick}
      >
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  clickHandler: null,
  color: false,
  wide: false,
};

export default Button;
