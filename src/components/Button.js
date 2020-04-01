import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handClick } = this.props;
    const { name } = this.props;
    handClick(name);
  }

  render() {
    const { name, color, wide } = this.props;
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
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
  handClick: PropTypes.func,
};

Button.defaultProps = {
  handClick: null,
  color: false,
  wide: false,
};

export default Button;
