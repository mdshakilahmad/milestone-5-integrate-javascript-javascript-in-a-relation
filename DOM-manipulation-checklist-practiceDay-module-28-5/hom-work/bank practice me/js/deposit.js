document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputvalueById("deposit-field");
  const previousDepositTotal = getTextElementValuetId("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);
  const previousBalance = getTextElementValuetId("balance-total");
  const newBalance = previousBalance + newDepositAmount;
  setTextElementValueById("balance-total", newBalance);
});
