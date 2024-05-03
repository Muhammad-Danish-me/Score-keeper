var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset")
var numInput = document.getElementById("numDisplay")
var winningScoreDisplay = document.getElementById("numChange")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.style.color = "green";
    }
    p1Display.textContent = p1Score;
  }
});
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.style.color = "green";
    }
    p2Display.textContent = p2Score;
  }
});
resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.style.color = "white"
  p2Display.style.color = "white"

  gameOver = false

})
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value
  winningScore = numInput.value
})