function phoneNumberEntered(input) {
  return { type: 'PHONE_NUMBER_ENTERED', payload: input };
}

module.exports = {
  phoneNumberEntered,
};
