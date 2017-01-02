const { reducer } = require('../reducer');

describe('reducer(state, action)', () => {
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
    describe('When no cards have been drawn previously', () => {
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

      const newState = reducer(state, action);

      it('hydrates the state with the card object', () => {
        expect(newState.drawnCards).toEqual([{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        }]);
      });
    });

    describe('When some cards have already been drawn', () => {
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
        drawnCards: [{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        }],
      };

      const newState = reducer(state, action);

      it('adds the new card object to the array of previously drawn cards', () => {
        expect(newState.drawnCards).toEqual([
          {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          },
          {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          }
        ]);
      });
    });
  });
});
