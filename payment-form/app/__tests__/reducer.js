const { reducer } = require('../reducer');

describe('On PHONE_NUMBER_ENTERED', () => {
  it('updates the state with the entered phone number', () => {
    // ARRANGE
    const prevState = {
      phoneNumber: '',
    };
    const action = {
      type: 'PHONE_NUMBER_ENTERED',
      payload: '123',
    };
    // ACT
    const newState = reducer(prevState, action);
    // ASSERT
    expect(newState).toEqual({
      phoneNumber: '123',
    });
  });
  describe('when a letter is entered', () => {
    it('ignores the letter', () => {
      // ARRANGE
      const prevState = {
        phoneNumber: '123',
      };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '123a',
      };
      // ACT
      const newState = reducer(prevState, action);
      // ASSERT
      expect(newState).toEqual(prevState);
    });
  });
  describe('when with formatting is entered', () => {
    it('strips away all the formatting', () => {
      // ARRANGE
      const prevState = {
        phoneNumber: '1234567',
      };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '(123) 456-78'
      };
      // ACT
      const newState = reducer(prevState, action);
      // ASSERT
      expect(newState).toEqual({
        phoneNumber: '12345678',
      });
    });
  });
  describe('when more than 10 digits are entered', () => {
    it('ignores anything past the 10th digit', () => {
      // ARRANGE
      const prevState = {
        phoneNumber: '1234567890'
      };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '(123) 456-78909'
      };
      // ACT
      const newState = reducer(prevState, action);
      // ASSERT
      expect(newState).toEqual(prevState);
    });
  });
});
