const { phoneNumberReducer } = require('../reducer');

describe('phoneNumberReducer', () => {
  [
    {
      action: { type: 'PHONE_NUMBER_ENTERED', payload: '123' },
      nextState: '123',
    },
    {
      action: { type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78' },
      nextState: '12345678',
    },
    {
      action: { type: 'PHONE_NUMBER_ENTERED', payload: '123a' },
      nextState: '123',
    },
    {
      action: { type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78909' },
      nextState: '1234567890',
    },
    {
      action: { type: '@@redux/INIT' },
      nextState: '',
    }
  ].forEach(scenario => {
    test(`on ${scenario.action.type} ${scenario.action.payload || ''} -> "${scenario.nextState}"`, () => {
      expect(phoneNumberReducer(scenario.action)).toEqual(scenario.nextState);
    });
  });
});
