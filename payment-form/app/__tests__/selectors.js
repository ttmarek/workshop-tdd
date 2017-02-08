const {
  getFormattedPhoneNumber,
} = require('../selectors');

describe('getFormattedPhoneNumber(state)', () => {
  describe('for a three digit number: 123', () => {
    it('does not do any formatting: 123', () => {
      // ARRANGE
      const state = {
        phoneNumber: '123',
      };
      // ACT
      const phoneNumber = getFormattedPhoneNumber(state);
      // ASSERT
      expect(phoneNumber).toEqual('123');
    });
  });
  describe('for a four digit number: 1234', () => {
    it('adds a space and some parens: (123) 4', () => {
      // ARRANGE
      const state = {
        phoneNumber: '1234',
      };
      // ACT
      const phoneNumber = getFormattedPhoneNumber(state);
      // ASSERT
      expect(phoneNumber).toEqual('(123) 4');
    });
  });
  describe('for a 7 digit number: 1234567', () => {
    it('adds a dash: (123) 456-7', () => {
      // ARRANGE
      const state = {
        phoneNumber: '1234567',
      };
      // ACT
      const phoneNumber = getFormattedPhoneNumber(state);
      // ASSERT
      expect(phoneNumber).toEqual('(123) 456-7');
    });
  });
  describe('for a 10 digit number: 1234567890', () => {
    it('is completely formatted: (123) 456-7890', () => {
      // ARRANGE
      const state = {
        phoneNumber: '1234567890',
      };
      // ACT
      const phoneNumber = getFormattedPhoneNumber(state);
      // ASSERT
      expect(phoneNumber).toEqual('(123) 456-7890');
    });
  });
});
