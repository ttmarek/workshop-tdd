const voca = require('voca');
const { formatUsername } = require('../format-username');

// you know what an integration test is
// you understand when an integration test is better than a unit test
// you understand why it is better to test one thing at a time

// formatUsername(stringLib, ' mr hot pants') = 'mr-hot-pants'

describe('formatUsername(stringLib, " mr hot pants")', () => {
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

// ^^ Why bad?
// - testing implementation, what if the implementation changes? Use a different stringLib?
// - testing more than one thing at once
// ** hard to refactor/maintain

describe('formatUsername(stringLib, "mr hot pants")', () => {
  it('slugifies the username', () => {
    // ARRANGE
    const stringLib = voca;
    const username = 'mr hot pants';
    // ACT
    const formattedUsername = formatUsername(stringLib, username);
    // ASSERT
    expect(formattedUsername).toEqual('mr-hot-pants');
  });
});

describe('formatUsername(stringLib, "john ")', () => {
  it('trims whitespace from the username', () => {
    // ARRANGE
    const stringLib = voca;
    const username = 'john ';
    // ACT
    const formattedUsername = formatUsername(stringLib, username);
    // ASSERT
    expect(formattedUsername).toEqual('john');
  });
});
