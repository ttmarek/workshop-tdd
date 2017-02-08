const initialState = {
  phoneNumber: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PHONE_NUMBER_ENTERED': {
      const phoneNumber = action.payload.replace(/(\s|[^\d])/g, '').slice(0, 10);
      return Object.assign({}, state, { phoneNumber });
    }
    default:
      return state;
  }
}

module.exports = { reducer };
