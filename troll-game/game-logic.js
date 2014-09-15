$(document).ready(function () {
    $('#goButton').click(function () {
        var troll = prompt("You see a bridge blocked by a huge troll. Do you fight, kiss or bribe her?", "").toUpperCase();
        var result = bout(troll);
        $('.item').remove();
        $('#returnedResult').append('<p class="item">' + result + '</p>');
    });
});

function bout(troll) {
    var result;
        switch (troll) {
        case 'FIGHT':
        /* return ("You chose 'FIGHT.'"); */
        var strong = prompt("Are you strong? (Yes or No)").toUpperCase();
            while (strong != 'YES' && strong != 'NO') {
                var strong = prompt("I didn't understand you. Are you strong? (type the word 'Yes' or 'No')", "").toUpperCase();
            }
        var sword = prompt("Do you have a sword? (Yes or No)").toUpperCase();
            while (sword != 'YES' && sword != 'NO') {
                var sword = prompt("I didn't understand you. Do you have a sword? (type the word 'Yes' or 'No')", "").toUpperCase();
            } 
        if (strong === 'NO' && sword === 'NO') {
            return ("What were you thinking, attacking troll without a sword? She smashes your head with her fist and sucks your brains out of your ears. YOU LOSE."); 
        } else if (strong === 'YES' && sword === 'YES') {
            return ("Your mighty sword stroke cuts the troll in half. YOU WIN!");
        } else if (strong === 'YES' && sword === 'NO') {
            return ("Your fists are no match for a troll. She laughs as she rips your arms off and eats them. YOU LOSE.");
        } else if (strong === 'NO' && sword === 'YES') {
            return ("Your puny sword blows fail to harm the troll. She roars in annoyance and smashes you like a pancake. YOU LOSE.");
        }
        break;
        case 'KISS':
        /* console.log("You chose 'KISS.'"); */
        var tall = prompt("Can you reach her cheek? (Yes or No)").toUpperCase();
            while (tall != 'YES' && tall != 'NO') {
                tall = prompt("I didn't understand you. Are you tall? (type the word 'Yes' or 'No')", "").toUpperCase();
            } 
        if (tall === 'YES') {
            return ("The troll is charmed by your gesture and lets you go. YOU WIN.");
        } else {
            return ("The troll is confused by your attempts to grope her and eats your head. YOU LOSE.");
        }
        break;
        case 'BRIBE':
        /* console.log("You chose 'BRIBE.'"); */
        var gold = prompt("Do you have some gold? (Yes or No)?").toUpperCase();
            while (gold != 'YES' && gold != 'NO') {
                var gold = prompt("I didn't understand you. Do you have gold? (type the word 'Yes' or 'No')", "").toUpperCase();
            } 
        var gems = prompt("Do you also have gems? (Yes or No?)").toUpperCase();
            while (gems != 'YES' && gems != 'NO') {
                var gems = prompt("I didn't understand you. Do you have gems? (type the word 'Yes' or 'No')", "").toUpperCase();
            } 
        if (gold === 'YES' || gems === 'YES') {
            return ("The troll accepts your bribe and lets you go. YOU WIN!");
        } else {
            return ("This is not your lucky day. The troll breaks your legs and then eats you. YOU LOSE.");
        }
        break;
        default:
        return ("I didn't understand you. click the 'Go!' button, type the word 'fight' 'kiss' or 'bribe' and click 'ok'.");
    }
} 