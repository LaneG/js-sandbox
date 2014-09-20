$(document).ready(function() {
    // $('#goButton').click(rps);
});

// selecting a random array item
var selectFruit = ["Apple", "Orange", "Banana", "Cherry"];

var pickAFruit = function () {
  var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
  console.log(todaysFruit);
  return todaysFruit;
};

var computerOptions = ["Rock", "Paper", "Scissors"];

var pickComputerOption = function () {
  var computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  return computerChoice;
};
