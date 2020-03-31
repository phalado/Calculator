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
    const { name } = this.props;
    return (
      <button
        className="button"
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
  handClick: PropTypes.func,
};

Button.defaultProps = {
  handClick: null,
};

export default Button;
