const initialState = {
  phoneNumber: '',
};

function phoneNumberReducer(action) {
  const phoneNumber = action.payload.replace(/(\s|[^\d])/g, '').slice(0, 10);
  return { phoneNumber };
}

function reducer(state = initialState, action) {
  if (action.type === 'PHONE_NUMBER_ENTERED') {
    return phoneNumberReducer(action);
  }
  return state;
}

module.exports = { reducer, phoneNumberReducer };
