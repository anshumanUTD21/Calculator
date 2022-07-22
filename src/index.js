import "./styles.css";
let display_1El = document.querySelector(".display-1");
let display_2El = document.querySelector(".display-2");
let display_tempEl = document.querySelector(".temp-display");

let numbersEl = document.querySelectorAll(".numbers");
let functionEl = document.querySelectorAll(".function");
let equalEl = document.querySelector(".equal");
let clearAllEl = document.querySelector(".all-clear");
let clearSingleEl = document.querySelector(".single-clear");

let num1 = "";
let num2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach(function (number) {
  number.addEventListener("click", function (e) {
    // check if dot already exist
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    num2 += e.target.innerText;
    display_2El.innerText = num2;
  });
});

functionEl.forEach(function (fun) {
  fun.addEventListener("click", function (e) {
    if (!num2) {
      return;
    }
    haveDot = false;
    const functionName = e.target.innerText;
    if (num1 && num2 && lastOperation) {
      mathFunction();
    } else {
      result = parseFloat(num2);
    }
    clearVar(functionName);
    lastOperation = functionName;
  });
});

function clearVar(name = "") {
  num1 += num2 + " " + name + " ";
  display_1El.innerText = num1;
  display_2El.innerText = "";
  num2 = "";
  display_tempEl.innerText = result;
}

function mathFunction() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(num2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(num2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(num2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(num2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(num2);
  }
}

equalEl.addEventListener("click", function () {
  console.log(num1 + " " + num2);
  if (!num2 || !num1) return;
  haveDot = false;

  mathFunction();
  clearVar();
  display_2El.innerText = result;
  display_tempEl.innerText = "";
  num2 = result;
  num1 = "";
});

clearAllEl.addEventListener("click", function () {
  display_1El.innerText = "0";
  display_2El.innerText = "0";
  num1 = "";
  num2 = "";
  result = "";
  display_tempEl.innerText = "00";
});

clearSingleEl.addEventListener("click", function (e) {
  display_2El.innerText = "";
  num2 = "";
});
