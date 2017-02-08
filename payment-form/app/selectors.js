function getFormattedPhoneNumber(state) {
  const phoneNumber = state.phoneNumber;
  if (phoneNumber.length < 4) {
    return phoneNumber;
  }
  const part1 = phoneNumber.slice(0, 3);
  const part2 = phoneNumber.slice(3, 6);
  const part3 = phoneNumber.slice(6, 10);
  return part3.length > 0 ? `(${part1}) ${part2}-${part3}` : `(${part1}) ${part2}`;
}

module.exports = { getFormattedPhoneNumber };
