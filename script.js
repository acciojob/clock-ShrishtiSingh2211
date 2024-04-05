//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    const dateStr = now.toDateString();
    const timeStr = now.toLocaleTimeString();
    timerElement.textContent = `${dateStr} ,${timeStr}`;
}

// Call updateTimer function initially to display the timer
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);