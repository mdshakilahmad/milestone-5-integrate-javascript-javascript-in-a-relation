document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputvalueById("withdraw-field");
  const previousWithdrawAmount = getTextElementValuetId("withdraw-total");
  const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setTextElementValueById("withdraw-total", withdrawTotal);
  const previousBalance = getTextElementValuetId("balance-total");
  const newBalance = previousBalance - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalance);
});
