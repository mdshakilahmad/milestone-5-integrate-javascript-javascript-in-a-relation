const email = document
  .getElementById("email")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;

    const button = document.getElementById("submit");
    if (text === "submit") {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled");
    }
  });

document.getElementById("submit").addEventListener("click", function () {
  const none = document.getElementById("submit");
  none.style.display = "none";

  const email = document.getElementById("email");
  email.value = "";
});

// new work
const tuchH1 = document.getElementById("TOUCH");
let subscribBg = 0;
tuchH1.addEventListener("click", function () {
  const subscribe = document.getElementById("subscribe");
  if (subscribBg === 0) {
    subscribe.style.backgroundColor = "yellow";
    subscribBg = 1;
  } else {
    subscribe.style.backgroundColor = "#fceae8";
    subscribBg = 0;
  }
});

// new work

const buttons = document.getElementsByClassName("buy-now-button");
for (const button of buttons) {
  const buttonClick = button;
  buttonClick.addEventListener("click", function (event) {
    const cardBody = event.target.parentNode.parentNode;
    cardBody.style.backgroundColor = "blue";
    cardBody.style.boxShadow = "0 0 5px 6px wheat";
    cardBody.style.color = "white";
  });
}
