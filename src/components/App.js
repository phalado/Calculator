import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <Button name="Button" />
      // <ButtonPanel />
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
