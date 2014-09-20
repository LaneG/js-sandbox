var mystring = "hello world";
console.log(mystring);

var computerOptions = ["Rock", "Paper", "Scissors"];

var pickComputerOption = function () {
  var computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  console.log(computerChoice);
  return computerChoice;

  $('.item').remove();
  $('.result').append('<div class="item"><p> ' + computerChoice + '</p></div>');
  return false; 
};
