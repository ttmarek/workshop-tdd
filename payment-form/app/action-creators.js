function phoneNumberEntered(input) {
  return {
    type: 'PHONE_NUMBER_ENTERED',
    payload: input.trim(),
  };
}

module.exports = {
  phoneNumberEntered,
};
