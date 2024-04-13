function calculateTax() {
  const grossIncome = parseFloat(document.getElementById("grossIncome").value);
  const extraIncome = parseFloat(document.getElementById("extraIncome").value);
  const ageGroup = document.getElementById("ageGroup").value;
  const deductions = parseFloat(document.getElementById("deductions").value);

  const taxableIncome = grossIncome + extraIncome - deductions;
  let tax = 0;

  if (taxableIncome > 8) {
    switch (ageGroup) {
      case "<40":
        tax = 0.3 * (taxableIncome - 8);
        break;
      case ">=40&<60":
        tax = 0.4 * (taxableIncome - 8);
        break;
      case ">=60":
        tax = 0.1 * (taxableIncome - 8);
        break;
    }
  }

  let resultText = tax.toFixed(2) + " Lakhs";
  showModal(resultText);
}

function showModal(result) {
  const modal = document.getElementById("taxModal");
  const close = document.getElementById("close_modal");

  modal.style.display = "block";

  document.getElementById("result").innerHTML = result;

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
