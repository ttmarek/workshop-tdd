class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  multiplyBy(n) {
    return new Dollar(this.amount *= n);
  }
}

// Examples
// Dollar(amount) returns a new Dollar with amount property
// Dollar.multiplyBy(n) returns a new Dollar with the correct amount

describe('Dollar(amount)', () => {
  it('returns a new Dollar with amount property', () => {
    // ARRANGE
    const amount = 5;
    // ACT
    const fiveDollars = new Dollar(amount);
    // ASSERT
    expect(fiveDollars.amount).toBe(5);
  });
});

describe('Dollar.multiplyBy(n)', () => {
  it('returns a new Dollar with the correct amount', () => {
    // ARRANGE
    const five = new Dollar(5);
    // ACT
    const result = five.multiplyBy(2);
    // ASSERT
    expect(result.amount).toBe(10);
  });
});
