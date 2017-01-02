function sum(a, b) {
  return isFinite(a) && isFinite(b) ? a + b : 0;
}

module.exports = { sum };
