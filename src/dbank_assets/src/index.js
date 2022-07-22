import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  const balance = await dbank.checkBalance();
  document.getElementById("value").innerText = balance.toFixed(2);
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(
    document.getElementById("withdrawal-amount").value
  );

  button.setAttribute("disabled", true);

  if (inputAmount) {
    await dbank.topUp(inputAmount);
  }

  if (outputAmount) {
    await dbank.withdraw(outputAmount);
  }

  const balance = await dbank.checkBalance();
  document.getElementById("value").innerText = balance.toFixed(2);

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});
