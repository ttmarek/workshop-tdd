const { createStore } = require('redux');
const { renderUI } = require('./app/render-ui');
const { reducer } = require('./app/reducer');
const { getFormattedPhoneNumber } = require('./app/selectors');
const { phoneNumberEntered } = require('./app/action-creators');

const store = createStore(reducer);

store.subscribe(() => {
  const phoneNumber = getFormattedPhoneNumber(store.getState());
  renderUI(phoneNumber);
});

document.getElementById('telephone-input').addEventListener('input', event => {
  store.dispatch(phoneNumberEntered(event.target.value));
});
