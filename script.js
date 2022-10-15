const msg = document.querySelector(".message");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const score = document.querySelector(".score");

let random = Math.trunc(Math.random() * 10) + 1;
let lastScore = 10;

// add statement that if lastScore = 0, diplay message you lost

check.addEventListener("click", function () {
  if (guess.value == random) {
    lastScore++;
    msg.textContent = "Correct!";
    msg.style.color = "#70e000";
    number.textContent = guess.value;
    number.style.backgroundColor = "#70e000";
    score.textContent = lastScore;
  } else if (guess.value > random) {
    lastScore--;
    score.textContent = lastScore;
    msg.textContent = "Too High";
    msg.style.color = "";
    msg.style.color = "red";
    number.style.backgroundColor = "red";
  } else if (guess.value < random) {
    lastScore--;
    score.textContent = lastScore;
    msg.textContent = "Too Low";
    msg.style.color = "";
    msg.style.color = "red";
    number.style.backgroundColor = "red";
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
