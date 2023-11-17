function getInputvalueById(elementId) {
  const inputFieldElement = document.getElementById(elementId);
  const inputFieldElementValueString = inputFieldElement.value;
  const inputFieldElementValue = parseFloat(inputFieldElementValueString);
  inputFieldElement.value = "";
  if (isNaN(inputFieldElementValue)) {
    alert("please valid number");
    return;
  }
  return inputFieldElementValue;
}

function getTextElementValuetId(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;
}
