console.log("Hello world");

let score = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function homeAdOne() {
  let point = (score += 1);
  homeScore.innerText = point;
}

function homeAdTwo() {
  let point = (score += 2);
  homeScore.innerText = point;
}

function homeAdThree() {
  let point = (score += 3);
  homeScore.innerText = point;
}

function guestAdOne() {
  let point = (score += 1);
  guestScore.innerText = point;
}

function guestAdTwo() {
  let point = (score += 2);
  guestScore.innerText = point;
}

function guestAdThree() {
  let point = (score += 3);
  guestScore.innerText = point;
}
