var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hey! What is your name? ');

console.log(`Hello ${userName}! lets play a quiz about India:`);

var score=0;

function play(ques,answer){
  var userAnswer=readlineSync.question(ques);
  if(userAnswer===answer){
    console.log("Right!");
    score = score+2;
  }else{
    console.log("Wrong!");
  }
  console.log(".....");
}


var quesOne={
  ques:`
  Question 1. How many states are there in India ?
  A. 27
  B. 28
  C. 29
  D. 30
  Your answer : `
  ,
  answer:"B"
  
}

var quesTwo={
  ques:`
  question 2. What is the capital of Indian state Tripura?
 A. Gangtok
 B. Kohima
 C. Agartala
 D. Imphal
 Your answer : `
  ,
  answer:"C"
  
}

var quesThree={
  ques:`
  Question 3. What is the capital of state Andhra Pradesh?
 A. Hyderabad
 B. Amaravati
 C. Itanagar
 D. Vishakhapatnam
 Your answer : `
  ,
  answer:"B"
  
}

var quesFour={
  ques:`
  Question 4. What is the National song of India?
 A. Jana Gana Mana
 B. Satyameva Jayate
 C. Vande Mataram
 D. Saare Jahaan se Acha
 Your answer : `
  ,
  answer:"C"
  
}

var quesFive={
  ques:`
  Question 5. How many languages Included in the Eighth Schedule of the Indian Constitution?
 A. 22
 B. 21
 C. 2
 D. 28
 Your answer : `
  ,
  answer:"A"
  
}

var quesBank = [quesOne,quesTwo,quesThree,quesFour,quesFive];

for(var i=0; i<quesBank.length; i++)
{
  play(quesBank[i].ques,quesBank[i].answer);
}

console.log(`Your total score is: ${score} out of 10`);