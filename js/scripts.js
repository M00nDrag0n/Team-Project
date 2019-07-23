




// function Monster() {
//   this.¬ = [],
//   this.currentId = 0



function Questions(firstQuestion, secondQuestion, thirdQuestion) {
  this.firstQuestion = firstQuestion,
  this.secondQuestion = secondQuestion,
  this.thirdQuestion = thirdQuestion
}



var createMonster = new Monster();

$(document).ready(function() {
  $("form#monster").submit(function(event) {
    event.preventDefault();
    var firstQuestion = $("select#questionOne").val();
    var secondQuestion = $("select#questionTwo").val();
    var thirdQuestion = $("select#questionThree").val();
    var yourMonster = new Questions(firstQuestion, secondQuestion, thirdQuestion);
    createMonster.Question(yourMonster);
    console.log(monster.questions);
  })

})
