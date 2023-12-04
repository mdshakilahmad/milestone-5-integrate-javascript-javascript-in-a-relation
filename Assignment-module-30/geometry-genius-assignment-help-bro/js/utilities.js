function getInputElement(elementId) {
  const inputFieldElement = document.getElementById(elementId);
  const inputFieldValueString = inputFieldElement.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

function threeWordCalculation(elementIdOne, elementIdTwo) {
  const comonValue = 0.5;
  const rezult = comonValue * elementIdOne * elementIdTwo;
  return rezult;
}
function twoWordCalculation(elementIdOne, elementIdTwo) {
  const result = elementIdOne * elementIdTwo;
  return result;
}

function pi(elementIdOne, elementIdTwo) {
  const comonValue = 3.14;
  const rezult = comonValue * elementIdOne * elementIdTwo;
  return rezult;
}

let results = [];

function updateResults(data) {
  const isExist = results.findIndex((el) => el.name === data?.name) !== -1;

  if (isExist) {
    results = results.map((el) => {
      if (el.name === data?.name) {
        return data;
      }
      return el;
    });
  } else {
    results.push(data);
  }

  let str = "";
  results.forEach((row, key) => {
    str =
      str +
      `
    <div class="d-flex mt-2 justify-content-between align-items-center">
        <div>${key + 1} ${row.name}</div>
        <div>${row.value}cm<sup>2</sub></div>
        <div>
          <button class="btn btn-primary">Covert to m<sup>2</sup</button>
        </div>
      </div>
    `;
  });

  const calculationArea = document.getElementById("calculation-area");
  calculationArea.innerHTML = str;
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
