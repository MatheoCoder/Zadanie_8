const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.stopwatch');

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
	countTime = setInterval(() => {
		
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = '${minutes}:0${seconds}'
        }
	}, 1000);
};

startBtn.addEventListener('click', handleStart);
