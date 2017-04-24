function phoneNumberReducer(action) {
  if (action.type === 'PHONE_NUMBER_ENTERED') {
    const phoneNumber = action.payload.replace(/(\s|[^\d])/g, '').slice(0, 10);
    return phoneNumber;
  }
  return '';
}

module.exports = {
  phoneNumberReducer,
  reducer: (state, action) => {
    console.log(`Action ${action.type}`, action);
    return phoneNumberReducer(action);
  },
};
