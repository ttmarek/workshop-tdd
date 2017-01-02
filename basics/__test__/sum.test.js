const { sum } = require('../sum');

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
