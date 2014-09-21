// var userChoice = "foo";

// $(document).ready(function () {

//   $('.letter-button').click(pickComputerOption);

// });

var userChoice = 'foo';
$(document).ready(function(){

  $('.letter-button').click(pickComputerOption);

  $(".letter-button").click(function() {
      switch(this.id) {
          case 'button-r':
              userChoice='r';
          break;
          case 'button-p':
               userChoice='p';
          break;
          case 'button-s':
              someVar='s';
          break;
      }
      $("#someContainer").html(someVar);
  });
});
