function renderUI(deckId, drawnCards, count) {
  const hand = document.getElementById('hand');
  const hitMeBtn = document.getElementById('hit-me-btn');
  const messages = document.getElementById('messages');
  const countContainer = document.getElementById('count');

  if (deckId !== undefined) {
    hitMeBtn.disabled = false;
    messages.innerHTML = `<div>Playing With Deck: ${deckId}`;
  }

  if (drawnCards !== undefined && drawnCards.length > 0) {
    const images = drawnCards.map(card => `<img src="${card.image}">`);
    hand.innerHTML = images.join(' ');
  }

  if (count !== undefined) {
    countContainer.textContent = count;

    if (count >= 21) {
      hitMeBtn.disabled = true;
    }

    if (count > 21) {
      hitMeBtn.disabled = true;
      messages.innerHTML = `<div>BUST!</div>`;
    }
  }
}

module.exports = { renderUI };
