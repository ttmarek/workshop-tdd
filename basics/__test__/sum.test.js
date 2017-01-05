const { sum } = require('../sum');

// [] SKILL: you can write and implement tests using Jest
// [] SKILL: you can write well-structured tests (3A's)
// [] KNOWLEDGE: you know what a unit test is

// Happy Example: sum(2, 2) returns 4
// Edgy Example: sum(Infinity, -Infinity) returns 0
// Sad Example: sum(undefined, 10) returns 0

describe('Happy Example: sum(2, 2)', () => {
  it('returns 4', () => {
    // ARRANGE
    const a = 2;
    const b = 2;
    // ACT
    const result = sum(2, 2);
    // ASSERT
    expect(result).toBe(4); // strict equality (===)
  });
});

describe('Edgy Example: sum(Infinity, -Infinity)', () => {
  it('returns 0', () => {
    // ARRANGE
    const a = Infinity;
    const b = -Infinity;
    // ACT
    const result = sum(a, b);
    // ASSERT
    expect(result).toBe(0);
  });
});

describe('Sad Example: sum(undefined, 10)', () => {
  it('returns 0', () => {
    // ARRANGE
    const a = undefined;
    const b = 10;
    // ACT
    const result = sum(a, b);
    // ASSERT
    expect(result).toBe(0);
  });
});
