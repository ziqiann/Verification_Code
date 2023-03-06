var a = 0;
var b = 0;
var x = 0;
var operator = 0;
var answer = 0;

// Generate a random linear equation in one variable with integer solutions
function generateEquation() {
  var c = Math.floor(Math.random() * 10) + 1;
  a = c * (Math.floor(Math.random() * 100) + 1);
  b = c * (Math.floor(Math.random() * 100) + 1);
  x = c * (Math.floor(Math.random() * 100) + 1);
  operator = Math.floor(Math.random() * 2);
  var equation = "";

  console.log("a: ", a);
  console.log("b: ", b);
  console.log("operator: ", operator);

  switch (operator) {
    case 0:
      equation = a + "x + " + b + " = " + (a * x + b);
      break;
    case 1:
      equation = a + "x - " + b + " = " + (a * x - b);
      break;
  }

  return equation;
}

// Check if the user's input is correct
function checkAnswer() {
  var input1 = document.getElementById("input1").value;
  var userInput = parseInt(input1);
  switch (operator) {
    case 0:
      answer = (a * x + b - b) / a;
      break;
    case 1:
      answer = (a * x - b + b) / a;
      break;
  }

  console.log("userInput: ", userInput)
  console.log("ANSWER: ", answer)

  if (userInput === answer) {
    newEquation();
    document.getElementById("succeeded").innerHTML = "Verification succeeded!";
  } else {
    newEquation();
    document.getElementById("succeeded").innerHTML = "";
    document.getElementById("result").innerHTML = "Verification failed. Please try again.";
  }
}

// Generate a new equation and display it on the screen
function newEquation() {
  var equation = generateEquation();
  equations = answer.toString().split("");
  document.getElementById("equation").innerHTML = equation;
  document.getElementById("input1").value = "";
  document.getElementById("result").innerHTML = "";
}
newEquation();
