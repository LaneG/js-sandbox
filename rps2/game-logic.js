var mystring = "hello world";
console.log(mystring);

var computerOptions = ["r", "p", "s"];

var pickComputerOption = function () {
  var computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  console.log(computerChoice);
  // return computerChoice;

  $('.item').remove();
  $('#result').append('<h2 class="item">' + computerChoice + '</h2>');


};
