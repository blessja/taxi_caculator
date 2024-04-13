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

  const form = document.getElementById("taxForm");
  form.reset();

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

const inputs = document.querySelectorAll("#taxForm input");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    const icon = this.parentNode.querySelector(".input-group-text i");
    icon.style.display = "inline";
  });

  input.addEventListener("blur", function () {
    const icon = this.parentNode.querySelector(".input-group-text i");
    icon.style.display = "none";
  });
});

function validateAndCalculateTax() {
  const ageGroup = document.getElementById("ageGroup").value;

  if (ageGroup === "") {
    const errorIcon = document.querySelector(".error-icon");
    errorIcon.style.display = "inline";

    $('[data-toggle="tooltip"]').tooltip();

    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip("show");
    }, 100);

    return;
  }

  calculateTax();
}

// Add event listeners to input fields to clear errors on focus
const inputFields = document.querySelectorAll("#taxForm input, #ageGroup");
inputFields.forEach((inputField) => {
  inputField.addEventListener("focus", function () {
    const errorIcon = document.querySelector(".error-icon");
    errorIcon.style.display = "none";

    $('[data-toggle="tooltip"]').tooltip("hide");
  });
});
