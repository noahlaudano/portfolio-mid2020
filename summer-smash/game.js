var height = 0;
var width = 0;
var lives = 1;
var time = 10;

var modeTime = 1500;

var mode = window.location.search;
mode = mode.replace("?", "");

if (mode === "easy") {
  modeTime = 1500;
} else if (mode === "medium") {
  modeTime = 1000;
} else if (mode === "hard") {
  modeTime = 750;
}

function ajustSize() {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(width, height);
}

ajustSize();

var timer = setInterval(function () {
  time -= 1;
  if (time < 0) {
    clearInterval(timer);
    clearInterval(startMosquito);
    window.location.href = "win.html";
  } else {
    document.getElementById("timer").innerHTML = time;
  }
}, 1000);
function randomPosition() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (lives > 3) {
      window.location.href = "game-over.html";
    } else {
      document.getElementById("l" + lives).src = "img/e-heart.png";

      lives++;
    }
  }
  var positionX = Math.floor(Math.random() * width) - 90;
  var positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  var mosquito = document.createElement("img");
  mosquito.src = "img/fly2.png";
  mosquito.className = randomSize() + " " + randomAngle();
  mosquito.style.left = positionX + "px";
  mosquito.style.left = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);

  randomSize();

  console.log(randomSize());
  console.log(randomAngle());
}

function randomSize() {
  var mosquitoStyle = Math.floor(Math.random() * 3);

  switch (mosquitoStyle) {
    case 0:
      return "mosquito1";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}

function randomAngle() {
  var mosquitoStyle = Math.floor(Math.random() * 2);
  switch (mosquitoStyle) {
    case 0:
      return "rotateplus";

    case 1:
      return "rotateminus";
  }
}
