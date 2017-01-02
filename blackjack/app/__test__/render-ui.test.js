const {
  renderUI,
} = require('../render-ui');

describe('renderUI(deckId, drawnCard, count)', () => {
  beforeEach(() => {
    document.body.innerHTML =
      `<div id="messages"></div>
    <div class="container">
      <div id="count"></div>
    </div>
    <div class="container">
      <button id="hit-me-btn" disabled>Hit Me!</button>
    </div>
    <div class="container">
      <div id="hand"></div>
    </div>`;
  });

  describe('When the deckId is defined', () => {
    it('displays the deck Id in the message bar', () => {
      // ARRANGE
      const deckId = '239dkfkj93';

      // ACT
      renderUI(deckId);

      // ASSERT
      const messages = document.getElementById('messages');
      expect(messages.innerHTML).toEqual('<div>Playing With Deck: 239dkfkj93</div>');
    });

    it('enables the hit-me button', () => {
      // ARRANGE
      const deckId = '239dkfkj93';

      // ACT
      renderUI(deckId);

      // ASSERT
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(false);
    });
  });

  describe('When a card is first drawn', () => {
    it("displays the card's image", () => {
      // ARRANGE
      const drawnCards = [{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
      }];

      // ACT
      renderUI(undefined, drawnCards);

      // ASSERT
      const hand = document.getElementById('hand');
      expect(hand.innerHTML).toEqual('<img src="https://deckofcardsapi.com/static/img/KH.png">');
    });
  });

  describe('When there are multiple drawn cards', () => {
    it("displays each card's image", () => {
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
          }
      ];

      // ACT
      renderUI(undefined, drawnCards);

      // ASSERT
      const hand = document.getElementById('hand');
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/KH.png">')).toBe(true);
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/8C.png">')).toBe(true);
    });
  });

  describe('When a hand count is defined', () => {
    it('displays the count', () => {
      // ARRANGE
      const count = 20;

      // ACT
      renderUI(undefined, undefined, count);

      // ASSERT
      const countContainer = document.getElementById('count');
      expect(countContainer.textContent).toEqual('20');
    });

    describe('When the hand count is greater than 21', () => {
      it('displays a bust message', () => {
        // ARRANGE
        const deckId = 'lksd9023u';
        const count = 22;

        // ACT
        renderUI(deckId, undefined, count);

        // ASSERT
        const messages = document.getElementById('messages');
        expect(messages.innerHTML.includes('BUST!')).toBe(true);
      });
    });
  });

  describe('When the hand count is 21', () => {
    it('disables the hit-me button', () => {
      // ARRANGE
      const deckId = 'lksd9023u';
      const count = 21;

      // ACT
      renderUI(deckId, undefined, count);

      // ASSERT
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(true);
    });
  });

  describe('When the hand count is 25', () => {
    it('disables the hit-me button', () => {
      // ARRANGE
      const deckId = 'lksd9023u';
      const count = 25;

      // ACT
      renderUI(deckId, undefined, count);

      // ASSERT
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(true);
    });
  });
});
