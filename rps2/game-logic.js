var mystring = "you can do this, lane!!!!";
console.log(mystring);

var computerOptions = ["r", "p", "s"];

var pickComputerOption = function () {
  var computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  // console.log(computerChoice);
  return computerChoice;

};

var showResult = function () {

  $('.item').remove();
  $('#result').prepend('<img class="item" src="images/result-rvs.jpg" />')
  $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

};