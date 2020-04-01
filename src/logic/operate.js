import Big from 'big-js';

function operate(numberOne, numberTwo, operation) {
  let result = '';

  if (operation === '+') {
    result = toString(Big(numberOne) + Big(numberTwo));
  } else if (operation === '-') {
    result = toString(Big(numberOne) - Big(numberTwo));
  } else if (operation === 'x') {
    result = toString(Big(numberOne) * Big(numberTwo));
  } else if (operation === '÷') {
    if (numberTwo === 0) {
      result = 'nan';
    } else {
      result = toString(Big(numberOne) / Big(numberTwo));
    }
  } else if (operation === '%') {
    result = toString(Big(numberOne) * (Big(numberTwo) / 100));
  }

  return result;
}

export default operate;
