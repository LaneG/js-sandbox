$(document).ready(function() {
    $('#button').click(function() {
        var userChoice = $('input[name="userChoiceInput"]').val();
        $('.list').append('<div class="item"><p>You pick ' + userChoice + '</p></div>');

        var computerChoice = Math.random();
            if (computerChoice <= 0.34) {
            computerChoice = "rock";
                } else if(computerChoice <= 0.66) {
                computerChoice = "paper";
                    } else {
                    computerChoice = "scissors";
                    }

        $('.list').append('<div class="item"><p>I pick ' + computerChoice + '</p></div>');
        $('.list').append('<div class="item"><p>' + compare(computerChoice, userChoice) + '</p></div>');
        });

    $(document).on('click','.item', function() {
        $(this).remove();
    });

});

