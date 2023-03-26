const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.stopwatch');

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
    clearInterval(countTime);

  countTime = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    stopwatch.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, 100);
};

const handlePause = () => {
    clearInterval(countTime)
}

const handleStop = () => {
  clearInterval(countTime)
  stopwatch.textContent = '00:00'
  seconds = '0';
  minutes = '0';
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
