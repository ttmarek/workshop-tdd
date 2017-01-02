const initialState = {
  deckId: undefined,
  drawnCards: [],
};

function reducer(state = initialState, action) {
  const update = sliceOfState => Object.assign({}, state, sliceOfState);

  switch (action.type) {
    case 'DECK_RETRIEVED':
      return update({ deckId: action.payload });
    case 'CARD_RETRIEVED':
      return update({
        drawnCards: state.drawnCards.concat(action.payload),
      });
    default:
      return state;
  }
}

module.exports = { reducer };
