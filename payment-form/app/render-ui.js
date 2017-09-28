function renderUI(phoneNumber) {
  const input = document.getElementById('telephone-input');
  input.value = phoneNumber;

  // making edits
  if (input.selectionStart < phoneNumber.length - 2) {
    input.setSelectionRange(input.selectionStart, input.selectionEnd);
  }
};

module.exports = { renderUI };
