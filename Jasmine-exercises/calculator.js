window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  const paymentUI = document.getElementById("monthly-payment");

  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      paymentUI.innerText = '';
      update();
      form.reset();
    });
  }
});

function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


function update() {
  const span = document.querySelector('span');
  span.append(calculateMonthlyPayment());
}


function calculateMonthlyPayment(values) {
  let loanAmt = document.getElementById("loan-amount").value
  let loanYrs = document.getElementById("loan-years").value
  let loanRate = document.getElementById("loan-rate").value
  
  let periodicInterestRate = (loanRate/12)*.01;
  let numberOfPayments = loanYrs*12;
  let monthlyPayment = ((loanAmt*periodicInterestRate)/(1 - Math.pow(1 + periodicInterestRate, -numberOfPayments))).toFixed(2);
  
  return monthlyPayment;
}



