const {
  getFormattedPhoneNumber,
  formatPhoneNumber,
} = require('../selectors');

describe('foromatPhoneNumber(number)', () => {
  [
    ['', ''],
    ['1', '(1'],
    ['123', '(123'],
    ['1234', '(123) 4'],
    ['123456', '(123) 456'],
    ['1234567', '(123) 456-7'],
    ['1234567890', '(123) 456-7890'],
  ].forEach(pair => {
    test(`given "${pair[0]}" returns "${pair[1]}"`, () => {
      expect(formatPhoneNumber(pair[0])).toEqual(pair[1]);
    });
  });
});
