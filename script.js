const msg = document.querySelector(".message");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let random = Math.trunc(Math.random() * 10) + 1;
let lastScore = 10;
let hScore = 0;

check.addEventListener("click", function () {
  if (guess.value == random) {
    lastScore++;
    msg.textContent = "Correct!";
    msg.style.color = "#70e000";
    number.textContent = guess.value;
    number.style.backgroundColor = "#70e000";
    score.textContent = lastScore;
    if (lastScore > hScore) {
      hScore = lastScore;
      highscore.textContent = hScore;
    }
  } else if (guess.value > random) {
    lastScore--;
    score.textContent = lastScore;
    msg.textContent = "Too High";
    msg.style.color = "";
    msg.style.color = "orange";
    number.style.backgroundColor = "orange";
    if (lastScore === 0) {
      msg.textContent = "Game Over";
      msg.style.color = "red";
      number.style.backgroundColor = "red";
    }
  } else if (guess.value < random) {
    lastScore--;
    score.textContent = lastScore;
    msg.textContent = "Too Low";
    msg.style.color = "";
    msg.style.color = "orange";
    number.style.backgroundColor = "orange";
    if (lastScore === 0) {
      msg.textContent = "Game Over";
      msg.style.color = "red";
      number.style.backgroundColor = "red";
    }
  }
});

again.addEventListener("click", function () {
  msg.textContent = "START GUESSING";
  guess.value = "";
  number.textContent = "?";
  number.style.backgroundColor = "#eee";
  score.textContent = "10";
  msg.style.color = "";
  random = Math.trunc(Math.random() * 10) + 1;
});

// reset the game
again.addEventListener("click", function () {
  lastScore = 10;
  msg.textContent = "START GUESSING";
  guess.value = "";
  number.textContent = "?";
  number.style.backgroundColor = "#eee";
  score.textContent = "10";
  msg.style.color = "";
  random = Math.trunc(Math.random() * 10) + 1;
});
