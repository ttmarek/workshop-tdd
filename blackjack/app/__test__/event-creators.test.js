const nock = require('nock');
const {
  getDeck,
  drawCard,
} = require('../event-creators');

describe('EVENT CREATOR: getDeck(dispatch)', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('When the request to get a new 6 deck is successful', () => {
    it('dispatches the DECK_RETRIEVED event with the new deck Id.', () => {
      // ARRANGE
      nock('https://deckofcardsapi.com')
        .get('/api/deck/new/shuffle/?deck_count=6')
        .reply(200, {
          "success": true,
          "deck_id": "3p40paa87x90",
          "shuffled": true,
          "remaining": 52
        });
      const dispatch = jest.fn();

      // ACT
      const makeRequest = getDeck(dispatch);

      // ASSERT
      return makeRequest.then(() => {
        const expectedEvent = {
          type: 'DECK_RETRIEVED',
          payload: '3p40paa87x90',
        };
        expect(dispatch).toHaveBeenCalledWith(expectedEvent);
      });
    });
  });
});

describe('EVENT CREATOR: drawCard(dispatch, deckId)', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('When the request to get a new card is successful', () => {
    it('dispatches the `CARD_RETRIEVED` event with the new card object', () => {
      // ARRANGE
      nock('https://deckofcardsapi.com')
        .get('/api/deck/3p40paa87x90/draw/?count=1')
        .reply(200, {
          "success": true,
          "cards": [
            {
              "image": "https://deckofcardsapi.com/static/img/KH.png",
              "value": "KING",
              "suit": "HEARTS",
              "code": "KH"
            }
          ],
          "deck_id":"3p40paa87x90",
          "remaining": 50
        });
      const dispatch = jest.fn();

      // ACT
      const makeRequest = drawCard(dispatch, '3p40paa87x90');

      // ASSERT
      return makeRequest.then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'CARD_RETRIEVED',
          payload: {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          },
        });
      });
    });
  });
});
