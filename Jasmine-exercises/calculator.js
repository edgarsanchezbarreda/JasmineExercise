window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const span = document.querySelector('span');
  // span.append(calculateMonthlyPayment());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  let loanAmt = document.getElementById("loan-amount").value
  let loanYrs = document.getElementById("loan-years").value
  let loanRate = document.getElementById("loan-rate").value
  
  let periodicInterestRate = (loanRate/12)*.01;
  let numberOfPayments = loanYrs*12;
  let monthlyPayment = ((loanAmt*periodicInterestRate)/(1 - Math.pow(1 + periodicInterestRate, -numberOfPayments))).toFixed(2);
  
  return monthlyPayment;
}




// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  
  
}
