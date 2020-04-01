import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;

    const calculator = calculate({ total, next, operation }, buttonName);

    this.setState(() => ({
      total: calculator.total,
      next: calculator.next,
      operation: calculator.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="app">
        <Display value={total || next || '0'} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
