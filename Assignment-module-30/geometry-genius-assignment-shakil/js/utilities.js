function getInputElement(elementId) {
  const inputFieldElement = document.getElementById(elementId);
  const inputFieldValueString = inputFieldElement.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputFieldElement.value = "";
  if (isNaN(inputFieldValue)) {
    alert("please provide a valid number");
    return;
  }
  return inputFieldValue;
}

function threeWordCalculation(elementIdOne, elementIdTwo) {
  const comonValue = 0.5;
  const result = comonValue * elementIdOne * elementIdTwo;
  return result;
}
function twoWordCalculation(elementIdOne, elementIdTwo) {
  const result = elementIdOne * elementIdTwo;
  return result;
}

function pi(elementIdOne, elementIdTwo) {
  const comonValue = 3.14;
  const multiple = comonValue * elementIdOne * elementIdTwo;
  const multipleResultString = multiple.toFixed(2);
  const result = parseFloat(multipleResultString);
  return result;
}

function appendValue(finalCalculation, name) {
  if (!finalCalculation) {
    return;
  }
  const ol = document.getElementById("ol");
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="d-flex mt-2 justify-content-between align-items-center">
        <div>${name} ${finalCalculation}cm<sup>2</sub></div>
        <div>
          <button class="btn btn-primary btn-sm">Covert to m<sup>2</sup</button>
        </div>
    </div>  
    `;
  ol.appendChild(li);
}

/* function initCaltulator(checkButtonId, inputOneId, inputTwoId, outputId) {
  document.getElementById(checkButtonId).addEventListener("click", function () {
    const triangleInputFieldOne = getInputElement(inputOneId);

    const triangleInputFieldTwo = getInputElement(inputTwoId);

    const outputEdit = document.getElementById(outputId);
    outputEdit.innerHTML = `b = ${triangleInputFieldOne || 0} cm h = ${
      triangleInputFieldTwo || 0
    } cm`;
  });
}
 */
