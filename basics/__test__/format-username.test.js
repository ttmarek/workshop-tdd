const voca = require('voca');
const { formatUsername } = require('../format-username');

// [] KNOWLEDGE: you know what an integration test is
// [] WISDOM: you understand when an integration test is better than a unit test
// [] WISDOM: you understand why it is better to test one thing at a time

// Happy Example: formatUsername(stringLib, ' mr hot pants') = 'mr-hot-pants'
describe('1. Happy Example: formatUsername(stringLib, " mr hot pants")', () => {
  it('returns "mr-hot-pants"', () => {
    // ARRANGE
    const stringLib = voca;
    const username = ' mr hot pants';
    // ACT
    const result = formatUsername(stringLib, username);
    // ASSERT
    expect(result).toEqual('mr-hot-pants');
  });
});

describe('2. Happy Example: formatUsername(stringLib, " mr hot pants")', () => {
  it('trims and slugifies the username', () => {
    // ARRANGE
    const stringLib = {
      trim: jest.fn(() => 'mr hot pants'), // stub (returns something)
      slugify: jest.fn(), // spy (just check that it was called)
    };
    const username = ' mr hot pants';
    // ACT
    formatUsername(stringLib, username);
    // ASSERT
    expect(stringLib.trim).toHaveBeenCalled();
    expect(stringLib.slugify).toHaveBeenCalledWith('mr hot pants');
  });
});
