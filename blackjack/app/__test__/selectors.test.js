const {
  countSelector,
} = require('../selectors');

describe('SELECTOR: countSelector(drawnCards)', () => {
  describe('When the hand contains a KH, and an 8C', () => {
    it('returns 18', () => {
      // ARRANGE
      const drawnCards = [
        {
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        },
        {
          "image": "https://deckofcardsapi.com/static/img/8C.png",
          "value": "8",
          "suit": "CLUBS",
          "code": "8C"
        },
      ];

      // ACT
      const count = countSelector(drawnCards);

      // ASSERT
      expect(count).toBe(18);
    });
  });

  describe('When the hand contains an AH, and an 8C', () => {
    it('returns 19', () => {
      // ARRANGE
      const drawnCards = [
        {
          "image": "https://deckofcardsapi.com/static/img/AH.png",
          "value": "ACE",
          "suit": "HEARTS",
          "code": "AH"
        },
        {
          "image": "https://deckofcardsapi.com/static/img/8C.png",
          "value": "8",
          "suit": "CLUBS",
          "code": "8C"
        },
      ];

      // ACT
      const count = countSelector(drawnCards);

      // ASSERT
      expect(count).toBe(19);
    });
  });

  describe('When the hand contains an AH, AS, and an 8C', () => {
    it('returns 20', () => {
      // ARRANGE
      const drawnCards = [
        {
          "image": "https://deckofcardsapi.com/static/img/AH.png",
          "value": "ACE",
          "suit": "HEARTS",
          "code": "AH"
        },
        {
          "image": "https://deckofcardsapi.com/static/img/AS.png",
          "value": "ACE",
          "suit": "SPADES",
          "code": "AS"
        },
        {
          "image": "https://deckofcardsapi.com/static/img/8C.png",
          "value": "8",
          "suit": "CLUBS",
          "code": "8C"
        },
      ];

      // ACT
      const count = countSelector(drawnCards);

      // ASSERT
      expect(count).toBe(20);
    });
  });
});
