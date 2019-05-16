
var suits = ["hearts", "diamonds", "spades", "clovers"]

var numbers = ["ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack"]

var cards = []

$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();

    suits.forEach(function(suit){
      numbers.forEach(function(number){
        console.log(number + "of" + suit)
         cards.push(number + "of" + suit)
         $('#output').append('<li>'+ number + "of" + suit +'</li>')

      });
    });
  });
});
