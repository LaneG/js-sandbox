var userChoice = 'not set';

$(document).ready(function(){
  
  $('.letter-button').click(function() {

      switch(this.id) {
          case 'button-r':
              userChoice='r';
              var computerChoice = pickComputerOption();
              // console.log(userChoice);
              // console.log(computerChoice);

              var showImage = "../rps2/images/result-"+userChoice+"v"+computerChoice+".jpg";
              // console.log(showImage)

              $('.item').remove();
              $('#result').prepend('<img class="item" src=" '+ showImage +' ">');
              // $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
          case 'button-p':
              userChoice='p';
              var computerChoice = pickComputerOption();
              // console.log(userChoice);
              // console.log(computerChoice);

              var showImage = "../rps2/images/result-"+userChoice+"v"+computerChoice+".jpg";
              // console.log(showImage)

              $('.item').remove();
              $('#result').prepend('<img class="item" src=" '+ showImage +' ">');
              // $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
          case 'button-s':
              userChoice='s';
              var computerChoice = pickComputerOption();
              // console.log(userChoice);
              // console.log(computerChoice);

              var showImage = "../rps2/images/result-"+userChoice+"v"+computerChoice+".jpg";
              // console.log(showImage)

              $('.item').remove();
              $('#result').prepend('<img class="item" src=" '+ showImage +' ">');
              // $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
      }     
  });
});