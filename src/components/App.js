import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState(state => ({
      input: state.input + value,
    }));
  }

  render() {
    const { input } = this.state;

    return (
      <div className="app">
        <Display value={input} />
        <ButtonPanel handClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
