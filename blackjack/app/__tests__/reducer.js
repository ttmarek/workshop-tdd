const { reducer } = require('../reducer');

describe('On DECK_RETRIEVED', () => {
  it('hydrates the state with the deck Id.', () => {
    // ARRANGE
    const action = {
      type: 'DECK_RETRIEVED',
      payload: '3p40paa87x90',
    };
    const state = { deckId: undefined };

    // ACT
    const actualState = reducer(state, action);

    // ASSERT
    const expectedState = { deckId: '3p40paa87x90' };
    expect(actualState).toEqual(expectedState);
  });
});

describe('On CARD_RETRIEVED', () => {
  it('hydrates the state with the card object', () => {
    // ARRANGE
    const action = {
      type: 'CARD_RETRIEVED',
      payload: {
        "image": "https://deckofcardsapi.com/static/img/KH.png",
        "value": "KING",
        "suit": "HEARTS",
        "code": "KH"
      },
    };
    const state = {
      drawnCards: [],
    };

    // ACT
    const newState = reducer(state, action);

    // ASSERT
    expect(newState.drawnCards).toEqual([{
      "image": "https://deckofcardsapi.com/static/img/KH.png",
      "value": "KING",
      "suit": "HEARTS",
      "code": "KH"
    }]);
  });
});
