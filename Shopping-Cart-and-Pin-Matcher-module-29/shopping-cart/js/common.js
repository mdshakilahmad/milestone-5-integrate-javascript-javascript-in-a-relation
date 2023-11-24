function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhonTotalString = phoneTotalElement.innerText;
  const currentPhonTotal = parseInt(currentPhonTotalString);
  return currentPhonTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal() {
  // calculate total
  const currentPhonTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhonTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  // calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
