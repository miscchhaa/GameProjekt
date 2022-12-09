var spieler = document.querySelector(".player");
spieler.style.left = "400px";
spieler.style.top = "0px";

var spielfeld = document.querySelector(".playground");
var timer = new Timer(250); /*timer spawnen von hindernissen*/

var backgroundPosition = 0;

var punkteAnzeige = document.querySelector(".punkte");
var score = 0;

var spielfeld = document.querySelector(".playground");
var vollbildButton = document.querySelector(".fullscreen"); /*Fullscreen*/
vollbildButton.addEventListener("click", function () {
  spielfeld.requestFullscreen();
});

function loop() {
  if (parseInt(spieler.style.left) > 250) {
    score = score + 1;
    punkteAnzeige.textContent = score;
  }

  backgroundPosition = backgroundPosition + 10; /*background scrolling*/
  spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;

  if (timer.ready()) {
    var h = document.createElement("img");
    h.classList.add("baum");
    h.src = "./img/tree.png";
    h.style.top = "520px";
    h.style.left = "1450px";
    spielfeld.appendChild(h);
  }

  var baeume = document.querySelectorAll(".baum");
  for (var baum of baeume) {
    baum.style.left =
      parseInt(baum.style.left) + -10 + "px"; /*geschwindigkeit baum*/
  }

  if (anyCollision(spieler, baeume)) {
    alert("Game over!"); /*schaut ob eine kollision passiert*/
    return;
  }

  if (parseInt(spieler.style.top) < 450) {
    spieler.style.top = parseInt(spieler.style.top) + 4 + "px"; /*schwerkraft*/
  }

  if (keyboard(32)) {
    spieler.style.top = parseInt(spieler.style.top) + -50 + "px"; /*Springen*/
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
