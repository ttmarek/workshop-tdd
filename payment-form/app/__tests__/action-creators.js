const {
  phoneNumberEntered,
} = require('../action-creators');

describe('phoneNumberEntered(input)', () => {
  it('returns the correct Redux action', () => {
    // ARRANGE
    const input = '123';
    // ACT
    const action = phoneNumberEntered(input);
    // ASSERT
    expect(action).toEqual({
      type: 'PHONE_NUMBER_ENTERED',
      payload: '123',
    });
  });
});
