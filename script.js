let startTime, updatedTime, difference, tInterval, running = false, lapCount = 0;
const timeDisplay = document.getElementById("display");
const lapList = document.getElementById("laps");

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTimeDisplay, 1);
        running = true;
    }
}

function updateTimeDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    timeDisplay.innerHTML = "00:00:00";
    lapList.innerHTML = "";
    lapCount = 0;
    running = false;
}

function recordLap() {
    if (running) {
        lapCount++;
        const lapTime = timeDisplay.innerHTML;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
