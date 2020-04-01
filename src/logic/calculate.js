import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next } = calculator;
  const { operation } = calculator;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // const symbols = ['AC', '+/-', '%', '÷', 'x', '-', '+', '=', '.'];

  if (numbers.includes(buttonName)) {
    total += buttonName;
  } else if (buttonName === '.') {
    if (total.indexOf(buttonName) !== -1) {
      total += buttonName;
    }
  } else if (buttonName === '+/-') {
    let temp = parseFloat(total);
    total = toString(temp *= -1);

    temp = parseFloat(next);
    next = toString(temp *= -1);
  } else if (buttonName === 'AC') {
    total = '0';
    next = '0';
  } else if (total && next && operation) {
    total = operate(parseFloat(total), parseFloat(next), operation);
  }

  return { total, next, operation };
}

export default calculate;
