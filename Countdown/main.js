const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const stopwatchBtn = document.getElementById('stopwatch');

const timerDisplay = document.getElementById('timer');

let countdownIntervalID;
let selectedValues = {
  hours: undefined,
  minutes: undefined,
  seconds: undefined,
};

function getUserTime() {
  const userTime = document.getElementById('input').value;
  if (userTime === '') {
    alert('Enter the time!');
    return undefined;
  }

  const timeArray = userTime.split(':');
  if (timeArray.length !== 3) {
    alert('Enter the time in format hours:minutes:seconds!');
    return undefined;
  }

  const hours = parseInt(timeArray[0]);
  const minutes = parseInt(timeArray[1]);
  const seconds = parseInt(timeArray[2]);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
    alert("Please enter the correct time!");
    return undefined;
  }

  return {
    hours,
    minutes,
    seconds,
  };
}

function addIfZeroNeeded(value) {
  return value < 10 ? "0" + value : value;
}

function formatTimeForDisplay({ hours, minutes, seconds }) {
  return addIfZeroNeeded(hours) + ":" +
    addIfZeroNeeded(minutes) + ":" +
    addIfZeroNeeded(seconds);
}

function startTimer({ hours, minutes, seconds }) {
  let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  countdownIntervalID = setInterval(function () {
    totalSeconds--;
    if (totalSeconds < 0) {
      pauseCountdown();
      alert("Countdown finished");
      return;
    }

    selectedValues.hours = Math.floor(totalSeconds / 3600);
    selectedValues.minutes = Math.floor((totalSeconds % 3600) / 60);
    selectedValues.seconds = Math.floor(totalSeconds % 60);
    timerDisplay.innerHTML = "Time Left " + formatTimeForDisplay(selectedValues);
  }, 1000);
}

function startCountdown() {
  if (selectedValues.hours !== undefined || selectedValues.minutes !== undefined || selectedValues.seconds !== undefined) {
    startTimer(selectedValues);
  } else {
    const userTime = getUserTime();
    if (userTime === undefined) {
      return;
    }

    selectedValues = userTime;
    timerDisplay.innerHTML = "Time Left " + formatTimeForDisplay(userTime);
    startTimer(userTime);
  }
}

function resetCountdown() {
  pauseCountdown();

  selectedValues.hours = undefined;
  selectedValues.minutes = undefined;
  selectedValues.seconds = undefined;

  timerDisplay.innerHTML=""
}


function pauseCountdown () {
    clearInterval(countdownIntervalID);
}



startBtn.addEventListener('click', startCountdown);
resetBtn.addEventListener('click', resetCountdown);
pauseBtn.addEventListener('click', pauseCountdown);
