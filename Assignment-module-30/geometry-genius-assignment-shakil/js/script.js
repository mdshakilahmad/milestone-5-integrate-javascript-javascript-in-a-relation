// 1
document
  .getElementById("triangle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const triangleInputValueOne = getInputElement("triangle-input-field-one");
    const triangleInputValueTwo = getInputElement("triangle-input-field-two");
    const finalCalculation = threeWordCalculation(
      triangleInputValueOne,
      triangleInputValueTwo
    );
    const name = "Triangle";
    appendValue(finalCalculation, name);
  });

// 2
document
  .getElementById("rectangle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const rectangleInputValueOne = getInputElement("rectangle-input-field-one");

    const rectangleInputValueTwo = getInputElement("rectangle-input-field-two");

    const finalCalculation = twoWordCalculation(
      rectangleInputValueOne,
      rectangleInputValueTwo
    );

    const name = "Rectangle";
    appendValue(finalCalculation, name);
  });

// 3
document
  .getElementById("parallelogram-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const parallelogramInputValueOne = getInputElement(
      "parallelogram-input-field-one"
    );

    const parallelogramInputValueTwo = getInputElement(
      "parallelogram-input-field-two"
    );

    const finalCalculation = twoWordCalculation(
      parallelogramInputValueOne,
      parallelogramInputValueTwo
    );

    const name = "Parallelogram";
    appendValue(finalCalculation, name);
  });

// 4
document
  .getElementById("rhombus-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const rhombusInputValueOne = getInputElement("rhombus-input-field-one");

    const rhombusInputValueTwo = getInputElement("rhombus-input-field-two");

    const finalCalculation = threeWordCalculation(
      rhombusInputValueOne,
      rhombusInputValueTwo
    );

    const name = "Rhombus";
    appendValue(finalCalculation, name);
  });

// 5
document
  .getElementById("pentagon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const pentagonInputValueOne = getInputElement("pentagon-input-field-one");

    const pentagonInputValueTwo = getInputElement("pentagon-input-field-two");

    const finalCalculation = threeWordCalculation(
      pentagonInputValueOne,
      pentagonInputValueTwo
    );

    const name = "Pentagon";
    appendValue(finalCalculation, name);
  });

// 6
document
  .getElementById("ellipse-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const ellipseInputValueOne = getInputElement("ellipse-input-field-one");

    const ellipseInputValueTwo = getInputElement("ellipse-input-field-two");

    const finalCalculation = pi(ellipseInputValueOne, ellipseInputValueTwo);

    const name = "Ellipse";
    appendValue(finalCalculation, name);
  });

/* const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

genNew.addEventListener("click", setBg);
setBg();
 */
const card = document.querySelectorAll(".card");
for (const item of card) {
  item.addEventListener("mouseenter", function () {
    // item.style.backgroundColor = "red";
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    item.style.backgroundColor = "#" + randomColor;
    // item.innerHTML = "#" + randomColor;
  });
}

// 1
const triangleCheck = document
  .getElementById("triangle-check-icon")
  .addEventListener("click", function () {
    const triangleInpuntOne = document.getElementById(
      "triangle-input-field-one"
    );
    const inputValueOne = triangleInpuntOne.value;

    const triangleInpuntTwo = document.getElementById(
      "triangle-input-field-two"
    );
    const inputValueTwo = triangleInpuntTwo.value;

    const b = document.getElementById("b");
    const h = document.getElementById("h");

    b.innerText = inputValueOne;
    h.innerText = inputValueTwo;

    const triangleValues = document.querySelectorAll(".triangle-value");
    for (const item of triangleValues) {
      item.style.visibility = "visible";
    }
    const inputTriangleWraper = document.getElementById(
      "input-triangle-wraper"
    );
    inputTriangleWraper.style.visibility = "hidden";

    const triangleEditIcon = document.querySelector(".triangle-edit-icon");
    triangleEditIcon.style.visibility = "visible";
  });

const triangleEditIcon = document.querySelector(".triangle-edit-icon");
triangleEditIcon.addEventListener("click", function () {
  const inputTriangleWraper = document.getElementById("input-triangle-wraper");
  inputTriangleWraper.style.visibility = "visible";
});

// 2
const rectangleCheck = document
  .getElementById("rectangle-check-icon")
  .addEventListener("click", function () {
    const rectangleInpuntOne = document.getElementById(
      "rectangle-input-field-one"
    );
    const inputValueOne = rectangleInpuntOne.value;

    const rectangleInpuntTwo = document.getElementById(
      "rectangle-input-field-two"
    );
    const inputValueTwo = rectangleInpuntTwo.value;

    const w = document.getElementById("w");
    const l = document.getElementById("l");

    w.innerText = inputValueOne;
    l.innerText = inputValueTwo;

    const rectangleValues = document.querySelectorAll(".rectangle-value");
    for (const item of rectangleValues) {
      item.style.visibility = "visible";
    }
    const inputRectangleWraper = document.getElementById(
      "input-rectangle-wraper"
    );
    inputRectangleWraper.style.visibility = "hidden";

    const rectangleEditIcon = document.querySelector(".rectangle-edit-icon");
    rectangleEditIcon.style.visibility = "visible";
  });

const rectangleEditIcon = document.querySelector(".rectangle-edit-icon");
rectangleEditIcon.addEventListener("click", function () {
  const inputRectangleWraper = document.getElementById(
    "input-rectangle-wraper"
  );
  inputRectangleWraper.style.visibility = "visible";
});

// 3

const parallelogramCheck = document
  .getElementById("parallelogram-check-icon")
  .addEventListener("click", function () {
    const parallelogramInputOne = document.getElementById(
      "parallelogram-input-field-one"
    );
    const inputValueOne = parallelogramInputOne.value;

    const parallelogramInputTwo = document.getElementById(
      "parallelogram-input-field-two"
    );
    const inputValueTwo = parallelogramInputTwo.value;

    const b = document.getElementById("parallelogram-b");
    const h = document.getElementById("parallelogram-h");

    b.innerText = inputValueOne;
    h.innerText = inputValueTwo;

    const parallelogramValues = document.querySelectorAll(
      ".parallelogram-value"
    );
    for (const item of parallelogramValues) {
      item.style.visibility = "visible";
    }
    const inputParallelogramWraper = document.getElementById(
      "input-parallelogram-wraper"
    );
    inputParallelogramWraper.style.visibility = "hidden";

    const parallelogramEditIcon = document.querySelector(
      ".parallelogram-edit-icon"
    );
    parallelogramEditIcon.style.visibility = "visible";
  });

const parallelogramEditIcon = document.querySelector(
  ".parallelogram-edit-icon"
);
parallelogramEditIcon.addEventListener("click", function () {
  const inputParallelogramWraper = document.getElementById(
    "input-parallelogram-wraper"
  );
  inputParallelogramWraper.style.visibility = "visible";
});

// 4
const rhombusCheck = document
  .getElementById("rhombus-check-icon")
  .addEventListener("click", function () {
    const rhombusInputOne = document.getElementById("rhombus-input-field-one");
    const inputValueOne = rhombusInputOne.value;

    const rhombusInputTwo = document.getElementById("rhombus-input-field-two");
    const inputValueTwo = rhombusInputTwo.value;

    const b = document.getElementById("rhombus-d1");
    const h = document.getElementById("rhombus-d2");

    b.innerText = inputValueOne;
    h.innerText = inputValueTwo;

    const rhombusValues = document.querySelectorAll(".rhombus-value");
    for (const item of rhombusValues) {
      item.style.visibility = "visible";
    }
    const inputRhombusWraper = document.getElementById("input-rhombus-wraper");
    inputRhombusWraper.style.visibility = "hidden";

    const rhombusEditIcon = document.querySelector(".rhombus-edit-icon");
    rhombusEditIcon.style.visibility = "visible";
  });

const rhombusEditIcon = document.querySelector(".rhombus-edit-icon");
rhombusEditIcon.addEventListener("click", function () {
  const inputRhombusWraper = document.getElementById("input-rhombus-wraper");
  inputRhombusWraper.style.visibility = "visible";
});

// 5
const pentagonCheck = document
  .getElementById("pentagon-check-icon")
  .addEventListener("click", function () {
    const pentagonInputOne = document.getElementById(
      "pentagon-input-field-one"
    );
    const inputValueOne = pentagonInputOne.value;

    const pentagonInputTwo = document.getElementById(
      "pentagon-input-field-two"
    );
    const inputValueTwo = pentagonInputTwo.value;

    const p = document.getElementById("pentagon-p");
    const b = document.getElementById("pentagon-b");

    p.innerText = inputValueOne;
    b.innerText = inputValueTwo;

    const pentagonValues = document.querySelectorAll(".pentagon-value");
    for (const item of pentagonValues) {
      item.style.visibility = "visible";
    }
    const inputPentagonWraper = document.getElementById(
      "input-pentagon-wraper"
    );
    inputPentagonWraper.style.visibility = "hidden";

    const pentagonEditIcon = document.querySelector(".pentagon-edit-icon");
    pentagonEditIcon.style.visibility = "visible";
  });

const pentagonEditIcon = document.querySelector(".pentagon-edit-icon");
pentagonEditIcon.addEventListener("click", function () {
  const inputPentagonWraper = document.getElementById("input-pentagon-wraper");
  inputPentagonWraper.style.visibility = "visible";
});

// 6
const ellipseCheck = document
  .getElementById("ellipse-check-icon")
  .addEventListener("click", function () {
    const ellipseInputOne = document.getElementById("ellipse-input-field-one");
    const inputValueOne = ellipseInputOne.value;

    const ellipseInputTwo = document.getElementById("ellipse-input-field-two");
    const inputValueTwo = ellipseInputTwo.value;

    const a = document.getElementById("ellipse-a");
    const b = document.getElementById("ellipse-b");

    a.innerText = inputValueOne;
    b.innerText = inputValueTwo;

    const ellipseValues = document.querySelectorAll(".ellipse-value");
    for (const item of ellipseValues) {
      item.style.visibility = "visible";
    }
    const inputEllipseWraper = document.getElementById("input-ellipse-wraper");
    inputEllipseWraper.style.visibility = "hidden";

    const ellipseEditIcon = document.querySelector(".ellipse-edit-icon");
    ellipseEditIcon.style.visibility = "visible";
  });

const ellipseEditIcon = document.querySelector(".ellipse-edit-icon");
ellipseEditIcon.addEventListener("click", function () {
  const inputEllipseWraper = document.getElementById("input-ellipse-wraper");
  inputEllipseWraper.style.visibility = "visible";
});
