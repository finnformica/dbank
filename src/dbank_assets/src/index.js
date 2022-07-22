import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  update();
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

  await dbank.compound();

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

async function update() {
  const balance = await dbank.checkBalance();
  document.getElementById("value").innerText = balance.toFixed(2);
}
