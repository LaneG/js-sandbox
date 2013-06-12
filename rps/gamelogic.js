var rps=function() {
    var userChoice = $('input[name="userChoiceInput"]').val().toLowerCase();

    var computerChoice = Math.random();
        if (computerChoice <= 0.34) {
        computerChoice = "rock";
            } else if(computerChoice <= 0.66) {
            computerChoice = "paper";
                } else {
                computerChoice = "scissors";
                }

    // $('.result').append('<div class="item"><p>what is ' + userChoice + '? I only understand the words rock, paper and scissors.</p></div>'); 
    $('.item').remove();
    $('.result').append('<div class="item"><p>You picked ' + userChoice + ', I picked ' + computerChoice + '.</p></div>');
    $('.result').append('<div class="item"><h2 class="success">' + compare(computerChoice, userChoice) + '</h2></div>');
    return false;
};

var compare=function (choice1, choice2) {
    if (choice1 == choice2) {
        return "The result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins.";
        } else {
            return "paper wins.";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins.";
        } else {
            return "scissors wins.";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins.";
        } else {
            return "scissors wins.";
        }
    }
};

