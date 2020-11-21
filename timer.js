var time;
var intervalHandle;
var firstInterval;
var secondInterval;
var iterations;
let intervalCount = 0;
let start = 0;
let reset = 0;
var timeDisplay;
var message;
let iterationCount = 0;

function resetPage() {
  document.getElementById("buttonArea").appendChild(button1);
  document.getElementById("buttonArea").appendChild(button2);
  document.getElementById("buttonArea").appendChild(button3);
  document.getElementById("inputArea1").appendChild(firstIntervalInput);
  document.getElementById("inputArea2").appendChild(secondIntervalInput);
  document.getElementById("inputArea3").appendChild(iterationInput);
  document.getElementById("buttonArea2").appendChild(myButton);
}

function iterationSet() {

  iterations = document.getElementById("iteration").value * 2;

  if (isNaN(iterations)) {
    alert("Type a valid number please");
    return;
  }
}

function countdown() {

  var timeDisplay = document.getElementById("time");
  var min = Math.floor(time / 60);
  var sec = time - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;
  timeDisplay.innerHTML = message;

  if (time === 0) {
    clearInterval(intervalHandle);
    intervalCount++;
    iterationCount++;
    startCounter();
  }

  time--
}

function startCounter() {

  firstInterval = document.getElementById("firstinterval").value;
  secondInterval = document.getElementById("secondinterval").value;
  iterationSet();

  if (isNaN(firstInterval)) {
    alert("Type a valid number please");
    return;
  }

  if (isNaN(secondInterval)) {
    alert("Type a valid number please");
    return;
  }

  if (intervalCount % 2 === 0) {
    time = firstInterval * 60;
  } else {
    time = secondInterval * 60;
  }

  if (iterationCount < iterations) {
    intervalHandle = setInterval(countdown, 1000);
  }

  resetPage();

}

function countdownOption1() {
  var timeDisplay = document.getElementById("time");
  var min = Math.floor(time / 60);
  var sec = time - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;
  timeDisplay.innerHTML = message;

  if (time === 0) {
    clearInterval(intervalHandle);
    intervalCount++;
    iterationCount++;
    startOption1Counter();
  }

  time--;

}

function startOption1Counter() {
  
  iterationSet();

  if (intervalCount % 2 === 0) {
    time = 15 * 60;
  } else {
    time = 5 * 60;
  }

  if (iterationCount < iterations) {
  intervalHandle = setInterval(countdownOption1, 1000);
  }

  resetPage();
}

function countdownOption2() {
  var timeDisplay = document.getElementById("time");
  var min = Math.floor(time / 60);
  var sec = time - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;
  timeDisplay.innerHTML = message;

  if (time === 0) {
    clearInterval(intervalHandle);
    intervalCount++;
    iterationCount++;
    startOption2Counter();
  }
  time--;
}

function startOption2Counter() {

  iterationSet();

  if (intervalCount % 2 === 0) {
    time = 20 * 60;
  } else {
    time = 5 * 60;
  }
  if (iterationCount < iterations) {
    intervalHandle = setInterval(countdownOption1, 1000);
  }
  resetPage();
}

function countdownOption3() {
  var timeDisplay = document.getElementById("time");
  var min = Math.floor(time / 60);
  var sec = time - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;
  timeDisplay.innerHTML = message;

  if (time === 0) {
    clearInterval(intervalHandle);
    intervalCount++;
    iterationCount++;
    startOption2Counter();
  }
  time--;
}

function startOption3Counter() {

  iterationSet();

  if (intervalCount % 2 === 0) {
    time = 30 * 60;
  } else {
    time = 5 * 60;
  }
  if (iterationCount < iterations) {
    intervalHandle = setInterval(countdownOption1, 1000);
  }
  resetPage();
}

window.onload = function () {

  var button1 = document.createElement("input");
  button1.setAttribute("type", "button");
  button1.setAttribute("value", "15-5")
  button1.style.border = "none";
  button1.style.color = "white";
  button1.style.backgroundColor = "grey";
  button1.style.borderRadius = "8px";
  button1.style.fontSize = "24px";
  button1.style.width = "10%";
  button1.style.height = "35px";

  var button2 = document.createElement("input");
  button2.setAttribute("type", "button");
  button2.setAttribute("value", "20-5")
  button2.style.border = "none";
  button2.style.color = "white";
  button2.style.backgroundColor = "grey";
  button2.style.borderRadius = "8px";
  button2.style.fontSize = "24px";
  button2.style.margin = "50px";
  button2.style.width = "10%";
  button2.style.height = "35px";

  var button3 = document.createElement("input");
  button3.setAttribute("type", "button");
  button3.setAttribute("value", "30-5");
  button3.style.border = "none";
  button3.style.color = "white";
  button3.style.backgroundColor = "grey";
  button3.style.borderRadius = "8px";
  button3.style.fontSize = "24px";
  button3.style.width = "10%";
  button3.style.height = "35px";


  var firstIntervalInput = document.createElement("input");
  firstIntervalInput.setAttribute("type", "text");
  firstIntervalInput.setAttribute("id", "firstinterval");
  firstIntervalInput.style.height = "30px";
  firstIntervalInput.style.borderRadius = "8px";
  firstIntervalInput.style.border = "none";
  firstIntervalInput.style.fontWeight = "bold";
  firstIntervalInput.style.textAlign = "center";

  var secondIntervalInput = document.createElement("input");
  secondIntervalInput.setAttribute("type", "text");
  secondIntervalInput.setAttribute("id", "secondinterval");
  secondIntervalInput.style.height = "30px";
  secondIntervalInput.style.borderRadius = "8px";
  secondIntervalInput.style.border = "none";
  secondIntervalInput.style.fontWeight = "bold";
  secondIntervalInput.style.textAlign = "center";

  var iterationInput = document.createElement("input");
  iterationInput.setAttribute("type", "text");
  iterationInput.setAttribute("id", "iteration");
  iterationInput.style.height = "30px";
  iterationInput.style.borderRadius = "8px";
  iterationInput.style.border = "none";
  iterationInput.style.fontWeight = "bold";
  iterationInput.style.textAlign = "center";

  var myButton = document.createElement("input");
  myButton.setAttribute("type", "button");
  myButton.setAttribute("value", "Start");
  myButton.style.border = "none";
  myButton.style.color = "white";
  myButton.style.backgroundColor = "grey";
  myButton.style.borderRadius = "8px";
  myButton.style.fontSize = "24px";
  myButton.style.width = "20%";
  myButton.style.height = "40px";



  myButton.onclick = function () {
    if (start === 0 && 
        document.getElementById("iteration").value !== '' &&
        document.getElementById("firstinterval").value !== '' &&
        document.getElementById("secondinterval").value !== '') {
      start = 1;
      startCounter();
    }
  }

  button1.onclick = function () {

    if (start === 0 && document.getElementById("iteration").value !== '') {
      start = 1;
      startOption1Counter();
    }
  }

  button2.onclick = function () {
    if (start === 0 && document.getElementById("iteration").value !== '') {
      start = 1;
      startOption2Counter();
    }
  }

  button3.onclick = function () {
    if (start === 0 && document.getElementById("iteration").value !== '') {
      start = 1;
      startOption3Counter();
    }
  }

  document.getElementById("buttonArea").appendChild(button1);
  document.getElementById("buttonArea").appendChild(button2);
  document.getElementById("buttonArea").appendChild(button3);
  document.getElementById("inputArea1").appendChild(firstIntervalInput);
  document.getElementById("inputArea2").appendChild(secondIntervalInput);
  document.getElementById("inputArea3").appendChild(iterationInput);
  document.getElementById("buttonArea2").appendChild(myButton);

}

