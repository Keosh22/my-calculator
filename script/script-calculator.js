// storage for previous calculation
let calculation = localStorage.getItem("calculation") || "";
//display the previous calculation
displayValue();

//input number-operator
function updateValue(value){
 calculation += value;

 displayValue();
 localStorage.setItem('calculation', calculation);
}

//display the input
function displayValue() {
  document.querySelector(".js-input").innerHTML = calculation;
};

function clear(){
  calculation.clear;
  localStorage.setItem('calculation', calculation);
}
