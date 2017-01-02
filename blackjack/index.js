const Redux = require('redux');

const { getDeck, drawCard } = require('./app/actions');
const { reducer } = require('./app/reducer');
const { countSelector } = require('./app/selectors');
const { renderUI } = require('./app/render-ui');

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { deckId, drawnCards } = store.getState();

  const count = countSelector(drawnCards);

  renderUI(deckId, drawnCards, count);
});

getDeck(store.dispatch);

document.getElementById('hit-me-btn').addEventListener('click', () => {
  const deckId = store.getState().deckId;
  drawCard(store.dispatch, deckId);
});
