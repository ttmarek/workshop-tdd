function formatUsername(dep, username) {
  return dep.slugify(dep.trim(username));
}

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

// --------------------------------------------------

const voca = require('voca');

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
