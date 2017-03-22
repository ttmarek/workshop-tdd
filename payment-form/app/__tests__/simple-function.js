function sum(a, b) {
  return isFinite(a) && isFinite(b) ? a + b : 0;
}

// Examples
// sum(2, 5) returns 7
// sum(Infinity, -Infinity) returns 0

describe('sum(2, 5)', () => {
  it('returns 7', () => {
    // ARRANGE
    const a = 2;
    const b = 5;
    // ACT
    const result = sum(a, b);
    // ASSERT
    expect(result).toBe(7);
  });
});

describe('sum(Infinity, -Infinity)', () => {
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
