const { phoneNumberReducer } = require('../reducer');

describe('On PHONE_NUMBER_ENTERED', () => {
  it('updates the state with the entered phone number', () => {
    // ARRANGE
    const action = { type: 'PHONE_NUMBER_ENTERED', payload: '123' };
    // ACT
    const newState = phoneNumberReducer(action);
    // ASSERT
    expect(newState).toEqual({ phoneNumber: '123' });
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
});
