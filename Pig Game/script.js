"use strict";
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  const number = Math.ceil(Math.random() * 6);
  dice.classList.remove("hidden");
  dice.src = `dice-${number}.png`;

  if (number !== 1) {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player");
    dice.classList.add("hidden");
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  document.querySelector(`.player--${activePlayer}`).classList.remove("hidden");
  document.querySelector(`.player--${activePlayer}`).classList.add("player");
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
});
