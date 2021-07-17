'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "hello there!";
// document.querySelector(".number").textContent = "21";
// document.querySelector(".guess").value = 5;

let secretNumber = Math.trunc(Math.random()*20) + 1;


let score = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function(){
   const guess = Number(document.querySelector(".guess").value);

   if (score > 0){ 

   if(!guess){
       document.querySelector(".message").textContent = "Enter a non zero number only!";
       
    }

   else if (guess === secretNumber)
   {
       console.log(document.querySelector(".message").textContent = "Correct Number!");
       document.querySelector("body").style.backgroundColor = "#60b347";
       document.querySelector(".number").style.color = "#60b347";
       document.querySelector(".number").style.width = "30rem";
       document.querySelector(".number").textContent = secretNumber;
       document.querySelector(".again").style.color = "#60b347";
       document.querySelector(".check").style.color = "#60b347";
      
      if (score > highscore){
          highscore = score;
      } document.querySelector(".highscore").textContent = highscore;

   }
   else if (guess > secretNumber){
       console.log(document.querySelector(".message").textContent = "Too high!");
        score--;
        document.querySelector(".score").textContent = score;
   }
   else if (guess < secretNumber){
       console.log(document.querySelector(".message").textContent = "Too low!");
       score--;
       document.querySelector(".score").textContent = score;
   }
   }
   else
   {
       console.log(document.querySelector(".message").textContent = "You lose! :(");
       document.querySelector("body").style.backgroundColor = "#b71540";

   }

})

document.querySelector(".again").addEventListener("click", function(){
   //values back to initial
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1; 

    //messages and all back to initial
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = '';
    document.querySelector(".message").textContent = "Start guessing...";
    
    //styling back to initial
    document.querySelector(".again").style.color = "#222";
    document.querySelector(".check").style.color = "#222"; 
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.color = "#222";
    document.querySelector(".number").style.width = "15rem";

})