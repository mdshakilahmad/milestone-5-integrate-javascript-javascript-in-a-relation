// bold
let bold = 0;
document
  .getElementById("boldElementText")
  .addEventListener("click", function () {
    if (bold == 0) {
      const textArea = document.getElementById("text-area");
      textArea.style.fontWeight = "bold";
      bold = 1;
    } else {
      const textArea = document.getElementById("text-area");
      textArea.style.fontWeight = "normal";
      bold = 0;
    }
  });

//   italic
let italic = 0;
document
  .getElementById("italicElementText")
  .addEventListener("click", function () {
    if (italic == 0) {
      const textArea = document.getElementById("text-area");
      textArea.style.fontStyle = "italic";
      italic = 1;
    } else {
      const textArea = document.getElementById("text-area");
      textArea.style.fontStyle = "normal";
      italic = 0;
    }
  });

//   underline
let underline = 0;
document
  .getElementById("underlineElementText")
  .addEventListener("click", function () {
    if (underline == 0) {
      const textArea = document.getElementById("text-area");
      textArea.style.textDecoration = "underline";
      underline = 1;
    } else {
      const textArea = document.getElementById("text-area");
      textArea.style.textDecoration = "none";
      underline = 0;
    }
  });

// align-left
document.getElementById("align-left").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "left";
});

// align-center
document.getElementById("align-center").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "center";
});

// align-right
document.getElementById("align-right").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "right";
});

// align-justify
document.getElementById("align-justify").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "justify";
});

// font size
document.getElementById("fontSizeInput").addEventListener("click", function () {
  const fontSize = document.getElementById("fontSizeInput").value;
  document.getElementById("text-area").style.fontSize = fontSize + "px";
});

// upperOrLowercase
let upperOrLowercase = 0;
document
  .getElementById("upperOrLowercase")
  .addEventListener("click", function () {
    if (upperOrLowercase == 0) {
      const textArea = document.getElementById("text-area");
      textArea.style.textTransform = "uppercase";
      upperOrLowercase = 1;
    } else {
      const textArea = document.getElementById("text-area");
      textArea.style.textTransform = "lowercase";
      upperOrLowercase = 0;
    }
  });

// color
const inputColor = document.getElementById("input-color");
inputColor.oninput = () => {
  // document.body.style.backgroundColor = inputColor.value;
  const textArea = document.getElementById("text-area");
  textArea.style.color = inputColor.value;
};
