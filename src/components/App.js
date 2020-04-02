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

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPressed.bind(this));
  }

  onKeyPressed(e) {
    switch (true) {
      case (e.keyCode === 13 || e.keyCode === 187):
        this.handleClick('=');
        break;
      case (e.keyCode > 47 && e.keyCode < 58):
        this.handleClick((e.keyCode - 48).toString());
        break;
      case (e.keyCode > 95 && e.keyCode < 106):
        this.handleClick((e.keyCode - 96).toString());
        break;
      case (e.keyCode === 106):
        this.handleClick('x');
        break;
      case (e.keyCode === 107):
        this.handleClick('+');
        break;
      case (e.keyCode === 109):
        this.handleClick('-');
        break;
      case (e.keyCode === 110):
        this.handleClick('.');
        break;
      case (e.keyCode === 111):
        this.handleClick('÷');
        break;
      default:
        break;
    }
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
        <Display value={total || next || '0'} operation={operation} onKeyDown={this.onKeyPressed} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
