// step-1: add click evnet handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // console.log("submit button clicked");
  // step-2: get the email address inside the email intput feild
  // always remember to use .value to get text from an input feild
  const emailFeild = document.getElementById("user-email");
  const email = emailFeild.value;
  // console.log(email);
  // step-3: get password
  // 3.a: set id on the html element
  // 3.b: get the elemnet
  // 3.c: get the value from the element

  const passwordFeild = document.getElementById("user-password");
  const password = passwordFeild.value;
  // console.log(email, password);
  // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
  // step-4: verify email and password and whether valid user or not
  if (email === "ahmadshakil22255@gmail.com" && password === "secret") {
    // console.log("valid user");
    window.location.href = "bank.html";
  } else {
    // console.log("invalid user");
    alert("tui password vule gechos!! Toke teijjo sontan ghosona korlam.");
  }
});
