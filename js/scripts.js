$(document).ready(function() {

  var age = parseInt(prompt("Please enter your age"));

  if (age>=18) {
    $("#overE").show();
  }
  else if (age<18){
    $("#underE").show();
  }
  else {
    $("#invalid").show();
  }

  });
