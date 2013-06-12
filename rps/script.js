$(document).ready(function() {

    var f=function() {
        var userChoice = $('input[name="userChoiceInput"]').val().toLowerCase();
        $('.list').append('<div class="item"><p>You pick ' + userChoice + '</p></div>');

        var computerChoice = Math.random();
            if (computerChoice <= 0.34) {
            computerChoice = "rock";
                } else if(computerChoice <= 0.66) {
                computerChoice = "paper";
                    } else {
                    computerChoice = "scissors";
                    }

        $('.item').remove();
        $('.list').append('<div class="item"><br /><p>You picked ' + userChoice + ', I picked ' + computerChoice + '</p></div>');
        $('.list').append('<div class="item"><h2 class="success">' + compare(computerChoice, userChoice) + '</h2></div>');
        return false;
    };

    $('#goButton').click(f);

    $('form[name="userChoiceForm"]').submit(f);

    $(document).on('click','.item', function() {
        $(this).remove();
    });

});