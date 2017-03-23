const { phoneNumberReducer } = require('../reducer');

describe('on PHONE_NUMBER_ENTERED', () => {
  it('returns the new phone number state', () => {
    // ARRANGE
    const action = { type: 'PHONE_NUMBER_ENTERED', payload: '123' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({ phoneNumber: '123' });
  });
});

describe('when a number with formatting is entered', () => {
  it('strips away all the formatting', () => {
    // ARRANGE
    const action = { type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({ phoneNumber: '12345678' });
  });
});

describe('when a letter is entered', () => {
  it('ignores the letter', () => {
    // ARRANGE
    const action = { type: 'PHONE_NUMBER_ENTERED', payload: '123a' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({ phoneNumber: '123' });
  });
});

describe('when a number with more than 10 digits is entered', () => {
  it('ignores anything past the 10th digit', () => {
    // ARRANGE
    const action = { type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78909' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({ phoneNumber: '1234567890' });
  });
});

describe('on @@redux/INIT', () => {
  it('returns an empty object', () => {
    // ARRANGE
    const action = { type: '@@redux/INIT' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({});
  });
});
