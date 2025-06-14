let score = 0;
let timeLeft = 30;
let gameInterval;
let moveInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("dot").style.display = "block";

  gameInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);

  moveInterval = setInterval(moveDot, 1000);
  moveDot();
}

function moveDot() {
  const dot = document.getElementById("dot");
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
}

function handleClick() {
  if (timeLeft > 0) {
    score++;
    document.getElementById("score").textContent = score;
    moveDot();
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(moveInterval);
  document.getElementById("dot").style.display = "none";
  document.getElementById("final-score").textContent = score;
  document.getElementById("game-over").classList.remove("hidden");
}

window.onload = startGame;

