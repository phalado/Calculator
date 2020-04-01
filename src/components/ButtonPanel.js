import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { handClick } = this.props;
    handClick(name);
  }

  renderButton(name) {
    return (
      <Button
        name={name}
        handClick={this.handleClick}
      />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="group1 board-row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="group2 board-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('x')}
        </div>
        <div className="group3 board-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="group4 board-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="group5 board-row">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handClick: null,
};

export default ButtonPanel;
