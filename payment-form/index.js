const { createStore } = require('redux');
const { renderUI } = require('./app/render-ui');
const { reducer } = require('./app/reducer');
const { formatPhoneNumber } = require('./app/selectors');
const { phoneNumberEntered } = require('./app/action-creators');

const store = createStore(reducer);

store.subscribe(() => {
  const phoneNumber = formatPhoneNumber(store.getState());
  renderUI(phoneNumber);
});

document.getElementById('telephone-input').addEventListener('input', event => {
  store.dispatch(phoneNumberEntered(event.target.value));
});
