import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);

    expect(runningTotal.textContent).toEqual('4');
  })


  
 // calculator.add() - add 1 to 4 and get 5
  it('1+4 should be 5', () => {
    const button1= container.getByTestId('number1');
    const plus_button= container.getByTestId('operator-add');
    const button4= container.getByTestId('number4');
    const equals_button= container.getByTestId('operator-equals');

    const get5 = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(plus_button);
    fireEvent.click(button4);
    fireEvent.click(equals_button);

    expect(get5.textContent).toEqual('5');
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('7-4 should be 3', () => {
    const button7= container.getByTestId('number7');
    const minus_button= container.getByTestId('operator-subtract');
    const button4= container.getByTestId('number4');
    const equals_button= container.getByTestId('operator-equals');

    const get3 = container.getByTestId('running-total');

    fireEvent.click(button7);
    fireEvent.click(minus_button);
    fireEvent.click(button4);
    fireEvent.click(equals_button);

    expect(get3.textContent).toEqual('3');
  })


  // multiply 3 by 5 and get 15
  it('3x5 = 15', () => {
    const button5= container.getByTestId('number5'); 
    const multiply_button = container.getByTestId('operator-multiply');
    const button3= container.getByTestId('number3');
    const equals_button= container.getByTestId('operator-equals');

    const get15 = container.getByTestId('running-total');

    fireEvent.click(button5);
    fireEvent.click(multiply_button);
    fireEvent.click(button3);
    fireEvent.click(equals_button);

    expect(get15.textContent).toEqual('15');
})




// divide 21 by 7 and get 3
it('21/7=3', () => {
  const button2= container.getByTestId('number2');
  const button1= container.getByTestId('number1');
  const divide_button = container.getByTestId('operator-divide');
  const button7= container.getByTestId('number7');
  const equals_button= container.getByTestId('operator-equals');

  const get3 = container.getByTestId('running-total');

  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(divide_button);
  fireEvent.click(button7);
  fireEvent.click(equals_button);

  expect(get3.textContent).toEqual('3');
})



//concatenate multiple number button clicks
it('1234', () => {
  const button1= container.getByTestId('number1');
  const button2= container.getByTestId('number2');
  const button3= container.getByTestId('number3');
  const button4= container.getByTestId('number4');
  const button5= container.getByTestId('number5');

  const get12345 = container.getByTestId('running-total');

  fireEvent.click(button1);
  fireEvent.click(button2);
  fireEvent.click(button3);
  fireEvent.click(button4);
  fireEvent.click(button5);

  expect(get12345.textContent).toEqual('12345');
})


//chain multiple operations together
it('29+7*10', () => {
  const button2= container.getByTestId('number2');
  const button9= container.getByTestId('number9');
  const plus_button = container.getByTestId('operator-add');
  const button7= container.getByTestId('number7');
  const multiply_button = container.getByTestId('operator-multiply');
  const button1= container.getByTestId('number1');
  const button0= container.getByTestId('number0');

  const equals_button= container.getByTestId('operator-equals');

  const get360 = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(button9);
  fireEvent.click(plus_button);
  fireEvent.click(button7);
  fireEvent.click(multiply_button)
  fireEvent.click(button1);
  fireEvent.click(button0);
  fireEvent.click(equals_button);
  expect(get360.textContent).toEqual('360');
})


//clear the running total without affecting the calculation
it('24+5Clear+5', () => {
  const button2= container.getByTestId('number2');
  const button4= container.getByTestId('number4');
  const add_button = container.getByTestId('operator-add');
  const button3 = container.getByTestId('number3');
  const clear_button = container.getByTestId('clear');
  const minus_button = container.getByTestId('operator-subtract');
  const button5 = container.getByTestId('number5');
  
  const equals_button= container.getByTestId('operator-equals');

  const get22 = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(button4);
  fireEvent.click(add_button);
  fireEvent.click(button3);
  fireEvent.click(equals_button);
  fireEvent.click(button4);
  fireEvent.click(clear_button)
  fireEvent.click(minus_button);
  fireEvent.click(button5);
  fireEvent.click(equals_button);
  expect(get22.textContent).toEqual('22');
})

})