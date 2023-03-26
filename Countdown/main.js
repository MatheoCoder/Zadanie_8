const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');

let countdown;
function startCountdown() {
    let input = document.getElementById("input").value;
    if (input === "") {
        alert("Enter the time!");
        return;
    }
    let timeArray = input.split(":");
    if (timeArray.length !== 3) {
        alert("Enter the time in the format hours:minutes:seconds!");
        return;
    }
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
        hours < 0 || minutes < 0 || seconds < 0) {
        alert("Please enter the correct time!");
        return;
    }
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    let timerDisplay = document.getElementById("timer");
    timerDisplay.innerHTML = "Time left: " + input;
    countdown = setInterval(function() {
        totalSeconds--;
        if (totalSeconds < 0) {
            stopCountdown();
            alert("Countdown finished!");
            return;
        }
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let timeString = (hours < 10 ? "0" : "") + hours + ":" +
                         (minutes < 10 ? "0" : "") + minutes + ":" +
                         (seconds < 10 ? "0" : "") + seconds;
        timerDisplay.innerHTML = "Time left: " + timeString;
    }, 1000);
}
function stopCountdown() {
    location.reload();
}

function pauseCountdown() {
    clearInterval(countdown);
}

startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown)
pauseBtn.addEventListener('click', pauseCountdown)