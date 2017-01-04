const { sum } = require('../sum');

// [] SKILL: you can write and implement tests using Jest
// [] SKILL: you can write well-structured tests (3A's)
// [] KNOWLEDGE: you know what a unit test is

// Happy Example: sum(2, 2) returns 4
// Edgy Example: sum(Infinity, -Infinity) returns 0
// Sad Example: sum(undefined, 10) returns 0

describe('sum(a, b)', () => {
  it('returns the sum of a and b', () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const result = sum(a,b);

    // Assert
    expect(result).toBe(4); // strict equality (===)
  }); // Happy Path

  // Boundary Conditions, Edge Cases
  describe('When a is Infinity and b is -Infinity', () => {
    it('returns zero', () => {
      const a = Infinity;
      const b = -1 * Infinity;

      const result = sum(a, b);

      expect(result).toBe(0);
    });
  });

  // Sad Path
  describe('When a is undefined and b is defined', () => {
    it('returns zero', () => {
      const a = undefined;
      const b = 2;

      const result = sum(a, b);

      expect(result).toBe(0);
    });
  });
});
