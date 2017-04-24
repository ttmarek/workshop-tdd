function formatPhoneNumber(phoneNumber) {
  const part1 = phoneNumber.slice(0, 3);
  const part2 = phoneNumber.slice(3, 6);
  const part3 = phoneNumber.slice(6, 10);

  switch (true) {
    case part1.length === 0:
      return '';
    case part2.length === 0:
      return `(${part1}`;
    case part3.length === 0:
      return `(${part1}) ${part2}`;
    default:
      return `(${part1}) ${part2}-${part3}`;
  }
}

module.exports = {
  formatPhoneNumber,
};
