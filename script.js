"use Strict";

//---DEMO CODE PLS IGNORE--------------------

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 12;
// document.querySelector(".score").textContent = 16;

// document.querySelector(".guess").value = 17;
// console.log(document.querySelector(".guess").value);

//-------------- CODE Start from HERE-------------

// Calling a RANDOM number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// create a variable to store  score data
let score = 20;

let highscore = 0;

// Implementing codes on check Botton
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //when player not entered the value to the game
  if (!guess) {
    document.querySelector(".message").textContent = "NO Number 🤢";
  }

  //when player wins the game
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Yeah Correct Number ✔";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // here is the code for HighScore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //when player choose high number than hidden number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😜You lose the Game BRO";
      document.querySelector(".score").textContent = 0;
    }
  }
  //when player choose low number than hidden number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😜You lose the Game BRO";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//---code for AGAIN botton-----------
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
});

//--------Code for RESET Botton
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = "0";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
});
