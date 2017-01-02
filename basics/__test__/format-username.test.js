const voca = require('voca');
const { formatUsername } = require('../format-username');

// EXAMPLE
// fn(stringLib, ' mr hot pants') = 'mr-hot-pants'

describe('formatUsername(stringLib, username)', () => {
  it('trims the username and converts any spaces to dashes', () => {
    // ARRANGE
    const stringLib = voca;
    const username = ' some name ';

    // ACT
    const formattedUsername = formatUsername(stringLib, username);

    // ASSERT
    expect(formattedUsername).toEqual('some-name'); // Deep Equal
  });

  // ANOTHER WAY TO WRITE THIS TEST:
  it('trims the username and converts any spaces to dashes (unit)', () => {
    // ARRANGE
    const stringLib = {
      trim: jest.fn(() => 'some name'),  // STUB
      slugify: jest.fn(), // SPY
    };
    const username = ' some name ';

    // ACT
    const formattedUsername = formatUsername(stringLib, username);

    // ASSERT
    expect(stringLib.trim).toHaveBeenCalledWith(username);
    expect(stringLib.slugify).toHaveBeenCalledWith('some name');
  });
});
