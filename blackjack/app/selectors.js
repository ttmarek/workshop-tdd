function countSelector(drawnCards) {
  return drawnCards.reduce((count, card) => {
    const cardValue = (() => {
      if (['KING', 'JACK', 'QUEEN'].includes(card.value)) {
        return 10;
      }
      if (card.value === 'ACE') {
        return count + 11 > 21 ? 1 : 11;
      }
      return parseInt(card.value);
    })();

    return count + cardValue;
  }, 0);
}

module.exports = {
  countSelector,
};
