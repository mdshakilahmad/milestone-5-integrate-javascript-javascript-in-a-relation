document
  .getElementById("Triangle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const triangleInputValueOne = getInputElement("triangle-input-field-one");
    const triangleInputValueTwo = getInputElement("triangle-input-field-two");
    const finalCalculation = threeWordCalculation(
      triangleInputValueOne,
      triangleInputValueTwo
    );

    updateResults({
      name: "Triangle",
      value: finalCalculation,
    });
  });

document
  .getElementById("Rectangle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const rectangleInputValueOne = getInputElement("rectangle-input-field-one");

    const rectangleInputValueTwo = getInputElement("rectangle-input-field-two");

    const finalCalculation = twoWordCalculation(
      rectangleInputValueOne,
      rectangleInputValueTwo
    );

    updateResults({
      name: "Rectangle",
      value: finalCalculation,
    });
  });

document
  .getElementById("Parallelogram-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const parallelogramInputValueOne = getInputElement(
      "Parallelogram-input-field-one"
    );

    const parallelogramInputValueTwo = getInputElement(
      "Parallelogram-input-field-two"
    );

    const finalCalculation = twoWordCalculation(
      parallelogramInputValueOne,
      parallelogramInputValueTwo
    );

    updateResults({
      name: "Parallelogram",
      value: finalCalculation,
    });
  });

document
  .getElementById("Rhombus-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const RhombusInputValueOne = getInputElement("Rhombus-input-field-one");

    const RhombusInputValueTwo = getInputElement("Rhombus-input-field-two");

    const finalCalculation = threeWordCalculation(
      RhombusInputValueOne,
      RhombusInputValueTwo
    );

    updateResults({
      name: "Rhombus",
      value: finalCalculation,
    });
  });

document
  .getElementById("Pentagon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const PentagonInputValueOne = getInputElement("Pentagon-input-field-one");

    const PentagonInputValueTwo = getInputElement("Pentagon-input-field-two");

    const finalCalculation = threeWordCalculation(
      PentagonInputValueOne,
      PentagonInputValueTwo
    );

    updateResults({
      name: "Pentagon",
      value: finalCalculation,
    });
  });

document
  .getElementById("Ellipse-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const EllipseInputValueOne = getInputElement("Ellipse-input-field-one");

    const EllipseInputValueTwo = getInputElement("Ellipse-input-field-two");

    const finalCalculation = pi(EllipseInputValueOne, EllipseInputValueTwo);

    updateResults({
      name: "Ellipse",
      value: finalCalculation,
    });
  });
