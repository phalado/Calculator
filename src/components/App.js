import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;

    calculate(total, next, operation);

    this.setState(state => ({
      total: state.total + value,
    }));
  }

  render() {
    const { total } = this.state;

    return (
      <div className="app">
        <Display value={total} />
        <ButtonPanel handClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
