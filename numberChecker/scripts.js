$(document).ready(function () {
    $('#goButton').click(function () {
        var number = prompt("Enter a number", "");
        var answer = isEven(number);
        $('.item').remove();
        $('#returnedResult').append('<p class="item">' + number + ' is ' + answer + '.</p>');
    });
    $('#hint').click(function () {
        return alert("Whole numbers only (no fractions). No negative numbers or letters either, please!")
    });
});

function showPrompt() {
    var number;
    number = prompt("Please enter a number.");
}

function isEven(number) {
    var answer;
    if (number % 2 === 0) {
        answer = "is divisble by two";
    } else if (isNaN(number)) {
        answer = "is not a number, please try again.";
    } else {
        answer = "NOT divisible by two.";
    }
    return answer;
}

// SIMPLE NUMBER CHECKER
// HTML (above) creates page with text, button and place for answer
// jQuery attaches click behavior on page load
// user clicks link in text for explanation (alert)
// user clicks button, promoted to enter number (prompt)
// user enters a number and clicks "ok" in the prompt dialog
// program runs the isEven function with the user's number
// computer clears old results (if present)
// results shown on screen (.append)

// updates
// made answer variable global
// using NaN for error checking, handle case with else if
// got rid of confirmClick(), put an event handler on the a tag and moved alert() to javascript
