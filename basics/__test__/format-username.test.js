const voca = require('voca');
const { formatUsername } = require('../format-username');

// [] KNOWLEDGE: you know what an integration test is
// [] WISDOM: you understand when an integration test is better than a unit test
// [] WISDOM: you understand why it is better to test one thing at a time

// Happy Example: formatUsername(voca, ' mr hot pants') = 'mr-hot-pants'

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
