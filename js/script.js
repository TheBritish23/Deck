$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();


    var input = $("#Card").val()
    var inputArray = input.split(" ")
    inputArray.sort()
    var newArray = inputArray.map(function(item) {
      if (item.length >=3) {
        return item.toUpperCase()
      }
    });

    var suit = ['ace, hearts, diamonds, spades, clovers']
    console.log('suit: ',suit);
    // expected output: Array ['ace, hearts, diamonds, spades, clovers']

    var 
